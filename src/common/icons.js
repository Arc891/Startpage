/**
 * Icon Manager - Handles multiple icon packs and provides fallback mechanisms
 */
class IconManager {
  constructor() {
    this.iconPacks = new Map();
    this.defaultPack = 'tabler';
    this.fallbackIcon = 'circle';

    // Register built-in icon packs
    this.registerIconPack('tabler', {
      name: 'Tabler Icons',
      prefix: 'ti ti-',
      cssClass: 'tabler-icon',
      type: 'font',
      cssFile: 'src/css/tabler-icons.min.css'
    });

    this.registerIconPack('simple', {
      name: 'Simple Icons',
      prefix: '',
      cssClass: 'simple-icon',
      type: 'svg',
      baseUrl: 'https://cdn.simpleicons.org/'
    });

    this.registerIconPack('material', {
      name: 'Material Icons',
      prefix: 'material-icons',
      cssClass: 'material-icon',
      type: 'ligature',
      cssFile: 'https://fonts.googleapis.com/icon?family=Material+Icons'
    });
  }

  /**
   * Register a new icon pack
   * @param {string} id - Unique identifier for the icon pack
   * @param {Object} config - Icon pack configuration
   */
  registerIconPack(id, config) {
    this.iconPacks.set(id, {
      id,
      name: config.name,
      prefix: config.prefix,
      cssClass: config.cssClass,
      type: config.type || 'font', // 'font' or 'ligature'
      cssFile: config.cssFile,
      ...config
    });
  }

  /**
   * Get icon pack configuration
   * @param {string} packId - Icon pack identifier
   * @returns {Object|null} Icon pack configuration
   */
  getIconPack(packId) {
    return this.iconPacks.get(packId) || null;
  }

  /**
   * Set the default icon pack
   * @param {string} packId - Icon pack identifier
   */
  setDefaultPack(packId) {
    if (this.iconPacks.has(packId)) {
      this.defaultPack = packId;
    }
  }

  /**
   * Set the fallback icon name
   * @param {string} iconName - Fallback icon name
   */
  setFallbackIcon(iconName) {
    this.fallbackIcon = iconName;
  }

  /**
   * Parse icon definition from string or object
   * @param {string|Object} iconDef - Icon definition
   * @returns {Object} Parsed icon configuration
   */
  parseIconDefinition(iconDef) {
    if (typeof iconDef === 'string') {
      // Check if it contains pack prefix (e.g., "simple:github" or "tabler:brand-github")
      if (iconDef.includes(':')) {
        const [pack, icon] = iconDef.split(':', 2);
        return { pack, icon };
      }
      // Default to current default pack
      return { pack: this.defaultPack, icon: iconDef };
    }

    if (typeof iconDef === 'object' && iconDef !== null) {
      return {
        pack: iconDef.pack || this.defaultPack,
        icon: iconDef.icon || iconDef.name,
        color: iconDef.color,
        size: iconDef.size,
        customClass: iconDef.class
      };
    }

    return { pack: this.defaultPack, icon: this.fallbackIcon };
  }

  /**
   * Generate HTML for an icon
   * @param {string|Object} iconDef - Icon definition
   * @param {Object} options - Additional options
   * @returns {string} HTML string for the icon
   */
  generateIcon(iconDef, options = {}) {
    const parsed = this.parseIconDefinition(iconDef);
    const pack = this.getIconPack(parsed.pack);

    if (!pack) {
      // Fallback to default pack if specified pack doesn't exist
      parsed.pack = this.defaultPack;
      return this.generateIcon(parsed, options);
    }

    const iconName = parsed.icon || this.fallbackIcon;
    const color = parsed.color || options.color || '#1e1e2e';
    const size = parsed.size || options.size;
    const customClass = parsed.customClass || options.customClass || '';

    let iconClass, iconContent, iconElement;

    switch (pack.type) {
      case 'ligature':
        // Material Icons style
        iconClass = `${pack.prefix} ${pack.cssClass} link-icon ${customClass}`.trim();
        iconContent = iconName;
        iconElement = 'i';
        break;

      case 'svg':
        // SVG-based icons (Simple Icons from CDN)
        iconClass = `${pack.cssClass} link-icon ${customClass}`.trim();
        const svgUrl = `${pack.baseUrl}${iconName}/${color.replace('#', '')}`;
        return `<img src="${svgUrl}" class="${iconClass}" style="width: ${size || '0.85em'}; height: ${size || '0.85em'};" alt="${iconName} icon" />`;

      case 'font':
      default:
        // Font-based icons (Tabler, etc.)
        iconClass = `${pack.prefix}${iconName} ${pack.cssClass} link-icon ${customClass}`.trim();
        iconContent = '';
        iconElement = 'i';
        break;
    }

    let style = `color: ${color};`;
    if (size) {
      style += ` font-size: ${size};`;
    }

    if (pack.type === 'ligature') {
      return `<${iconElement} class="${iconClass}" style="${style}">${iconContent}</${iconElement}>`;
    } else {
      return `<${iconElement} class="${iconClass}" style="${style}"></${iconElement}>`;
    }
  }

  /**
   * Get all registered icon packs
   * @returns {Array} Array of icon pack configurations
   */
  getAllIconPacks() {
    return Array.from(this.iconPacks.values());
  }

  /**
   * Load CSS for all registered icon packs
   * @returns {Array} Array of CSS file URLs
   */
  getRequiredCSSFiles() {
    return Array.from(this.iconPacks.values())
      .map(pack => pack.cssFile)
      .filter(Boolean);
  }

  /**
   * Check if an icon exists in a specific pack (basic check)
   * @param {string} iconName - Icon name to check
   * @param {string} packId - Icon pack identifier
   * @returns {boolean} Whether the icon likely exists
   */
  iconExists(iconName, packId = this.defaultPack) {
    const pack = this.getIconPack(packId);
    if (!pack) return false;

    // This is a basic implementation - in a real scenario, you might want to
    // maintain icon lists for each pack or do more sophisticated checking
    return iconName && iconName.length > 0;
  }
}

// Create global instance
const IconManager_Instance = new IconManager();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = IconManager_Instance;
} else {
  window.IconManager = IconManager_Instance;
}
