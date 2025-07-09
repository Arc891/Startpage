class SearchBar extends Component {
    refs = {
        searchInput: ".search-input",
        searchIcon: ".search-icon",
    };

    inputText = "";
    defaultText = "Search bookmarks/web..";

    constructor() {
        super();

        this.setEvents();
    }

    setEvents() {
        this.refs.searchIcon = () => this.search;
    }

    imports() {
        return [
            this.resources.icons.material, 
            this.resources.fonts.roboto, 
            this.resources.fonts.raleway
        ];
    }

    style() {
        return `
            .searchbar {
                border: 1px solid #cdd6f4;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 20px 0;
            }

            .search-input {
                width: 100%;
                padding: 5px;
                font-size: 16px;
                border: 1px solid #ccc;
                border-radius: 5px;
                margin-right: 10px;
                font: 300 9pt 'Roboto', sans-serif;
                color: #cdd6f4;
            }

            .search-icon {
                color: #f38ba8;
                font-size: 10px;
                margin-right: 10px;
            }

        `;
    }

    template() {
        return `
            <span class="material-icons search-icon">search</span>
            <p class="search-input">${this.defaultText}</p>
        `;
    }

    keyHandler(event) {
        this.handleKeyPress(event);
    }

    handleKeyPress(event) {
        const key = event.key;

        if (key.length === 1) {
            if (key === " ") {
                this.inputText += "&nbsp;";
            } else {
                this.inputText += key;
            }
        } else if (key === "Backspace") {
            if (event.ctrlKey) { this.inputText = "" }
            else if (event.altKey) { 
                this.inputText  
                    ? this.inputText = this.inputText.split(" ").slice(0, -1).join(" ")
                    : this.inputText = "";
            }
            else { this.inputText = this.inputText.slice(0, -1); }
        } else if (key === "Enter") {
            if (document.querySelector('.bookmark-selection-ui')) {
                // If bookmark selection UI is open, don't search
                return;
            }
            this.search();
        }
        this.updateInputText();
    }

    updateInputText() {
        this.refs.searchInput = this.inputText || this.defaultText;
    }

    getBookmarks() {
        // Traverse CONFIG.tabs -> categories -> links, collect all link names
        if (!CONFIG || !Array.isArray(CONFIG.tabs)) return [];
        const bookmarks = [];
        CONFIG.tabs.forEach(tab => {
            if (tab.categories && Array.isArray(tab.categories)) {
                tab.categories.forEach(cat => {
                    if (cat.links && Array.isArray(cat.links)) {
                        cat.links.forEach(link => {
                            if (link.name) bookmarks.push(link);
                        });
                    }
                });
            }
        });
        return bookmarks;
    }

    checkBookmarksForSearch() {
        const regex = new RegExp(`^${this.inputText}`, "i");
        const bookmarks = this.getBookmarks();
        return bookmarks.filter(({ name }) => regex.test(name));
    }

    showBookmarkSelectionUI(matchingBookmarks) {
        // Remove any existing selection UI
        let existing = document.querySelector('.bookmark-selection-ui');
        if (existing) existing.remove();

        // Create container
        const container = document.createElement('div');
        container.className = 'bookmark-selection-ui';
        Object.assign(container.style, { 
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#1e1e2e',
            border: '1px solid #cdd6f4',
            borderRadius: '8px',
            padding: '10px',
            zIndex: '1000',
            minWidth: '200px',
            maxHeight: '400px',
            overflowY: 'auto'
        });

        // Add options
        matchingBookmarks.forEach(({ name, url, icon, icon_color }) => {
            const option = document.createElement('div');
            option.innerHTML = `${Links.getIcon({ icon, icon_color })}&nbsp;${name}`;
            Object.assign(option.style, {
                padding: '6px 12px',
                cursor: 'pointer',
                color: icon_color || '#cdd6f4',
                transition: 'background 0.2s',
                background: 'transparent',
                font: '300 12pt "Raleway", sans-serif',
                display: 'flex',
                alignItems: 'center'
            });
            option.onmouseenter = () => option.style.background = '#313244';
            option.onmouseleave = () => option.style.background = 'transparent';
            option.onclick = () => {
                window.open(url, "_self");
                closePopup();
            };
            container.appendChild(option);
        });

        
        // Select option on keyboard up or down
        const keySelectHandler = (e) => {
            if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                e.preventDefault();
                const options = container.querySelectorAll('div');
                let selectedIndex = Array.from(options).findIndex(opt => opt.style.background !== 'transparent');
                if (e.key === "ArrowUp") {
                    selectedIndex = (selectedIndex > 0) ? selectedIndex - 1 : options.length - 1;
                } else if (e.key === "ArrowDown") {
                    selectedIndex = (selectedIndex < options.length - 1) ? selectedIndex + 1 : 0;
                }
                options.forEach((opt, index) => {
                    opt.style.background = (index === selectedIndex) ? '#313244' : 'transparent';
                });
                options[selectedIndex].scrollIntoView({ block: 'nearest' });
            } else if (e.key === "Enter") {
                const selectedOption = container.querySelector('div[style*="background: rgb(49, 50, 68)"]');
                if (selectedOption) {
                    const url = this.getBookmarks().filter(({ name }) => selectedOption.textContent.includes(name))[0].url;
                    console.log(`Opening bookmark: ${selectedOption.textContent} (${url})`);
                    window.open(url, "_self");
                    closePopup();
                }
            } else if (e.key === "Escape") {
                closePopup();
            }
        };

        const closePopup = () => {
            container.remove();
            document.removeEventListener('mousedown', closeHandler);
            document.removeEventListener('keydown', keySelectHandler);
        };

        // Close on click outside
        const closeHandler = (e) => {
            if (!container.contains(e.target)) {
                closePopup();
            }
        };
        
        document.addEventListener('keydown', keySelectHandler);
        document.addEventListener('mousedown', closeHandler);

        document.body.appendChild(container);
    }


    search = () => {
        const inputText = this.inputText.replace(/&nbsp;/g, " ").trim(); // Normalize spaces
        const matchingBookmarks = this.checkBookmarksForSearch();
        if (matchingBookmarks.length > 0) {
            console.log("Matching bookmarks found:", matchingBookmarks);
            if (matchingBookmarks.length === 1) {
                const {name, url} = matchingBookmarks[0];
                console.log(`Opening bookmark: ${name} (${url})`);
                window.open(url, "_self");
            } else {
                console.log("Multiple matching bookmarks found:");
                this.showBookmarkSelectionUI(matchingBookmarks);
            }
        } else {
            console.log("No matching bookmarks found.");
            console.log(`Searching for: ${inputText} with ${CONFIG.config.defaultSearchEngine}`);
            const searchEngine = CONFIG.config.defaultSearchEngine || "Google";
            let searchUrl = "https://www.google.com/search?q=";
            if (Array.isArray(CONFIG.config.searchEngines)) {
                const found = CONFIG.config.searchEngines.find(({ name }) => name === searchEngine);
                if (found && found.url) searchUrl = found.url;
            }
            console.log(`Using search engine: ${searchEngine} (${searchUrl})`);
            window.open(`${searchUrl}${inputText}`, "_self");
        }
    };

    connectedCallback() {
        this.render();
    }
}