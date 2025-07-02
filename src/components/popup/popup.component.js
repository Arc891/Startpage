class PopupWindow extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.url = "";
    this.definedWidth = "800px";
    this.definedHeight = "600px";
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: none;
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(30,30,46,0.7);
          z-index: 1000;
          align-items: center;
          justify-content: center;
        }
        .popup-content {
          background: #1e1e2e;
          border-radius: 10px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.25);
          min-width: ${window.innerWidth > this.definedWidth ? this.definedWidth : "90vw"};
          min-height: ${window.innerHeight > this.definedHeight ? this.definedHeight : "90vh"};
          padding: 2em;
          position: relative;
          opacity: 0;
          transform: scale(0.7);
          transition: opacity 0.25s, transform 0.25s;
        }
        :host(.show) .popup-content {
          opacity: 1;
          transform: scale(1);
        }
        .popup-buttons {
          display: flex;
          gap: 1em;
          margin-top: 1em;
        }
        .popup-close, .popup-popout {
          background: #f38ba8;
          color: #1e1e2e;
          border: none;
          border-radius: 5px;
          padding: 0.5em 1em;
          cursor: pointer;
          font-weight: bold;
        }
      </style>
      <div class="popup-content">
        <iframe src="" frameborder="0" style="width:100%;height:${window.innerHeight > this.definedHeight ? this.definedHeight - 50 : "80vh"};border-radius:6px;"></iframe>
        <div class="popup-buttons">
          <button class="popup-close">Close</button>
          <button class="popup-popout">Pop-out</button>
        </div>
      </div>
    `;
  }


  connectedCallback() {
    this.shadowRoot.querySelector(".popup-close").onclick = () => this.hide();
    this.shadowRoot.querySelector(".popup-popout").onclick = () => {
      window.open(this.url, "_blank", "popup,width=1000,height=800");
      this.hide();
    };
  }
  
  show(url, animateFrom, size = "800x600") {
    this.url = url;
    this.shadowRoot.querySelector("iframe").src = url;
    this.style.display = "flex";

    // Parse size (e.g., "400x500")
    let width = "800px", height = "600px";
    if (size && typeof size === "string" && size.includes("x")) {
      [width, height] = size.split("x").map(v => v.trim() + "px");
    }
    this.definedWidth = width;
    this.definedHeight = height;

    // Set popup size
    const popupContent = this.shadowRoot.querySelector(".popup-content");
    popupContent.style.minWidth = width;
    popupContent.style.minHeight = height;
    const iframe = this.shadowRoot.querySelector("iframe");
    iframe.style.height = height; 

    // Animate from button
    if (animateFrom) {
      const rect = animateFrom.getBoundingClientRect();
      popupContent.animate(
        [
          {
            opacity: 0,
            transform: `translate(${rect.left + rect.width / 2 - window.innerWidth / 2}px,${rect.top + rect.height / 2 - window.innerHeight / 2}px) scale(0.2)`
          },
          { opacity: 1, transform: "translate(0,0) scale(1)" }
        ],
        { duration: 300, easing: "cubic-bezier(.4,2,.6,1)" }
      );
    }
    setTimeout(() => this.classList.add("show"), 10);
  }
  
  hide() {
    this.classList.remove("show");
    setTimeout(() => (this.style.display = "none"), 250);
    this.shadowRoot.querySelector("iframe").src = "";
  }
}
customElements.define("popup-window", PopupWindow);