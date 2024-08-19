class Clock extends Component {
  refs = {
    clock: ".clock-time",
    icon: ".clock-icon",
  };

  constructor() {
    super();

    this.setEvents();
  }

  setEvents() {
    this.onclick = this.switchFormat;
  }
  imports() {
    return [this.resources.icons.material, this.resources.fonts.roboto];
  }

  style() {
    return `
        .clock-time {
            white-space: nowrap;
            font: 300 9pt 'Roboto', sans-serif;
            color: #cdd6f4;
            letter-spacing: .5px;
        }

        .clock-icon {
            color: #f38ba8;
            font-size: 10pt;
            margin-right: 10px;
        }
    `;
  }

  template() {
    return `
        <span class="material-icons clock-icon">schedule</span>
        <p class="clock-time"></p>
    `;
  }

  setIconColor() {
    this.refs.icon.style.color = CONFIG.clock.iconColor;
  }

  setTime() {
    const date = new Date();

    this.refs.clock = date.strftime(CONFIG.clock.format);
  }

  switchFormat() {
    CONFIG.clock.format = CONFIG.clock.format === "h:i:s A d/m/Y" ? "H:i A" : "h:i:s A d/m/Y";
    this.setTime();
  }

  connectedCallback() {
    this.render().then(() => {
      this.setTime();
      this.setIconColor();

      setInterval(() => this.setTime(), 1000);
    });
  }
}
