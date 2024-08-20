class SearchBar extends Component {
    refs = {
        searchInput: ".search-input",
        searchIcon: ".search-icon",
    };

    inputText = "";

    constructor() {
        super();

        this.setEvents();
    }

    setEvents() {
        this.refs.searchIcon = () => this.search;
    }

    imports() {
        return [this.resources.icons.material, this.resources.fonts.roboto];
    }

    style() {
        return `
            .searchbar {
                border: 1px solid #ccc;
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
            <p class="search-input">Search..</p>
        `;
    }

    keyHandler(event) {
        this.handleKeyPress(event);
    }

    handleKeyPress(event) {
        const key = event.key;

        if (key.length === 1) {
            this.inputText += key;
        } else if (key === "Backspace") {
            if (event.altKey) { this.inputText = "" }
            else if (event.ctrlKey) { 
                this.inputText  
                    ? this.inputText = this.inputText.split(" ").slice(0, -1).join(" ")
                    : this.inputText = "";
            }
            else { this.inputText = this.inputText.slice(0, -1); }
        } else if (key === "Enter") {
            this.search();
        }
        this.updateInputText();
    }

    updateInputText() {
        this.refs.searchInput = this.inputText || "Search..";
    }

    search = () => {
        console.log(`Searching for: ${this.inputText}`);
        window.open(`https://www.google.com/search?q=${this.inputText}`, "_self");
    };

    connectedCallback() {
        this.render();
    }
}