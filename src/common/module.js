const components = {
  "status-bar": Statusbar,
  "tabs-list": Tabs,
  "search-bar": SearchBar,
  "current-time": Clock,
  "weather-forecast": Weather,
};

Object.keys(components).forEach(componentName => {
  if (!CONFIG.disabled.includes(componentName))
    customElements.define(componentName, components[componentName]);
});
