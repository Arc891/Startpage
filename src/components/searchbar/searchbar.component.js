class SearchBar extends Component {
    externalRefs = {};

    refs = {
        searchInput: ".search-input",
        searchIcon: ".search-icon",
        searchButton: ".search-button",
    };

    inputText = "";

    constructor() {
        super();

        this.setDependencies();
        this.setEvents();
    }

    setEvents() {
        this.onclick = this.search;
    }

    setDependencies() {
        this.externalRefs = {
            searchInput: this.shadow.querySelector(this.refs.searchInput),
            searchIcon: this.shadow.querySelector(this.refs.searchIcon),
        };
    }

    imports() {
        return [this.resources.icons.material, this.resources.fonts.roboto];
    }

    style() {
        return `
            .search-bar {
                border: 1px solid #ccc;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 20px 0;
            }

            .search-input {
                width: 100%;
                padding: 10px;
                font-size: 16px;
                border: 1px solid #ccc;
                border-radius: 5px;
                margin-right: 10px;
            }

            .search-icon {
                cursor: pointer;
            }

            .search-button {
                padding: 10px;
                font-size: 16px;
                border: 1px solid #ccc;
                border-radius: 5px;
                cursor: pointer;
            }
        `;
    }

    template() {
        return `
            <span class="material-icons search-icon">search</span>
            <input class="search-input" type="text" placeholder="Search...">
            <button class="search-button">Search</button>
        `;
    }

    handleKeyPress(key) {
        if (key.length === 1) {
            // this.externalRefs.searchInput.value += key;
            this.inputText += key;
        } else if (key === "Backspace") {
            // this.externalRefs.searchInput.value = this.externalRefs.searchInput.value.slice(0, -1);
            this.inputText = this.inputText.slice(0, -1);
        } else if (key === "Enter") {
            this.search(this.inputText);
        } else {
            console.log(`Key pressed: ${key}`);
        }
        console.log(`Input text: ${this.inputText}`);
    }

    search = (s = "") => {
        // const query = this.externalRefs.searchInput.value ? this.externalRefs.searchInput.value : s;
        console.log(`Searching for: ${s}`);
        window.open(`https://www.google.com/search?q=${s}`, "_blank");
    };
}