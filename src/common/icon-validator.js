/**
 * Icon Configuration Validator
 * Helps validate and debug icon configurations
 */
class IconValidator {
  constructor(iconManager) {
    this.iconManager = iconManager;
  }

  /**
   * Validate a single icon configuration
   * @param {Object} linkConfig - Link configuration object
   * @returns {Object} Validation result
   */
  validateIcon(linkConfig) {
    const result = {
      valid: true,
      warnings: [],
      errors: [],
      suggestions: []
    };

    if (!linkConfig.icon) {
      result.warnings.push('No icon specified');
      return result;
    }

    const parsed = this.iconManager.parseIconDefinition(linkConfig.icon);
    const pack = this.iconManager.getIconPack(parsed.pack);

    if (!pack) {
      result.valid = false;
      result.errors.push(`Icon pack "${parsed.pack}" not found`);
      result.suggestions.push(`Available packs: ${this.iconManager.getAllIconPacks().map(p => p.id).join(', ')}`);
    }

    // Check for deprecated icon pack specifications
    if (linkConfig.icon_pack && typeof linkConfig.icon === 'string' && !linkConfig.icon.includes(':')) {
      result.suggestions.push(`Consider using "${linkConfig.icon_pack}:${linkConfig.icon}" format instead of separate icon_pack property`);
    }

    // Validate colors
    if (linkConfig.icon_color && !this.isValidColor(linkConfig.icon_color)) {
      result.warnings.push(`Icon color "${linkConfig.icon_color}" may not be valid`);
    }

    return result;
  }

  /**
   * Validate all icons in a configuration
   * @param {Object} config - Full configuration object
   * @returns {Object} Validation results
   */
  validateConfiguration(config) {
    const results = {
      totalLinks: 0,
      validIcons: 0,
      invalidIcons: 0,
      warnings: 0,
      details: []
    };

    if (!config.tabs) {
      return results;
    }

    config.tabs.forEach((tab, tabIndex) => {
      if (!tab.categories) return;

      tab.categories.forEach((category, categoryIndex) => {
        if (!category.links) return;

        category.links.forEach((link, linkIndex) => {
          results.totalLinks++;

          const validation = this.validateIcon(link);
          const detail = {
            location: `tabs[${tabIndex}].categories[${categoryIndex}].links[${linkIndex}]`,
            name: link.name || 'Unnamed link',
            icon: link.icon,
            validation
          };

          if (validation.valid) {
            results.validIcons++;
          } else {
            results.invalidIcons++;
          }

          results.warnings += validation.warnings.length;
          results.details.push(detail);
        });
      });
    });

    return results;
  }

  /**
   * Generate a report from validation results
   * @param {Object} results - Validation results
   * @returns {string} Human-readable report
   */
  generateReport(results) {
    let report = `\n=== Icon Configuration Report ===\n`;
    report += `Total links: ${results.totalLinks}\n`;
    report += `Valid icons: ${results.validIcons}\n`;
    report += `Invalid icons: ${results.invalidIcons}\n`;
    report += `Warnings: ${results.warnings}\n\n`;

    if (results.invalidIcons > 0 || results.warnings > 0) {
      report += `=== Issues Found ===\n`;

      results.details.forEach(detail => {
        if (!detail.validation.valid || detail.validation.warnings.length > 0) {
          report += `\n${detail.location} (${detail.name}):\n`;

          detail.validation.errors.forEach(error => {
            report += `  ❌ Error: ${error}\n`;
          });

          detail.validation.warnings.forEach(warning => {
            report += `  ⚠️  Warning: ${warning}\n`;
          });

          detail.validation.suggestions.forEach(suggestion => {
            report += `  💡 Suggestion: ${suggestion}\n`;
          });
        }
      });
    } else {
      report += `✅ All icons are valid!\n`;
    }

    return report;
  }

  /**
   * Basic color validation
   * @param {string} color - Color string to validate
   * @returns {boolean} Whether the color appears valid
   */
  isValidColor(color) {
    if (!color) return false;

    // Hex colors
    if (color.match(/^#[0-9a-fA-F]{3,8}$/)) return true;

    // RGB/RGBA
    if (color.match(/^rgba?\(/)) return true;

    // HSL/HSLA
    if (color.match(/^hsla?\(/)) return true;

    // Named colors (basic check)
    const namedColors = ['red', 'blue', 'green', 'yellow', 'black', 'white', 'transparent'];
    if (namedColors.includes(color.toLowerCase())) return true;

    return false;
  }

  /**
   * Suggest icon alternatives
   * @param {string} searchTerm - Term to search for
   * @returns {Array} Array of suggested icons from different packs
   */
  suggestIcons(searchTerm) {
    const suggestions = [];
    const term = searchTerm.toLowerCase();

    // This is a basic implementation - in a real scenario, you might want to
    // maintain searchable indexes of all available icons
    const commonMappings = {
      'github': [
        { pack: 'tabler', icon: 'brand-github' },
        { pack: 'simple', icon: 'github' }
      ],
      'home': [
        { pack: 'tabler', icon: 'home' },
        { pack: 'simple', icon: 'home' },
        { pack: 'material', icon: 'home' }
      ],
      'settings': [
        { pack: 'tabler', icon: 'settings' },
        { pack: 'simple', icon: 'settings' },
        { pack: 'material', icon: 'settings' }
      ],
      'code': [
        { pack: 'tabler', icon: 'code' },
        { pack: 'simple', icon: 'code' },
        { pack: 'material', icon: 'code' }
      ],
      'discord': [
        { pack: 'tabler', icon: 'brand-discord' },
        { pack: 'simple', icon: 'discord' }
      ],
      'twitter': [
        { pack: 'tabler', icon: 'brand-twitter' },
        { pack: 'simple', icon: 'twitter' }
      ]
    };

    if (commonMappings[term]) {
      return commonMappings[term];
    }

    return suggestions;
  }
}

// Create global validator instance when IconManager is available
if (typeof window !== 'undefined' && window.IconManager) {
  window.IconValidator = new IconValidator(window.IconManager);

  // Helper function to validate current configuration
  window.validateIcons = function () {
    if (typeof CONFIG !== 'undefined') {
      const results = window.IconValidator.validateConfiguration(CONFIG);
      const report = window.IconValidator.generateReport(results);
      console.log(report);
      return results;
    } else {
      console.error('CONFIG not found. Make sure your configuration is loaded.');
    }
  };

  // Helper function to suggest icons
  window.suggestIcons = function (searchTerm) {
    const suggestions = window.IconValidator.suggestIcons(searchTerm);
    console.log(`Suggestions for "${searchTerm}":`, suggestions);
    return suggestions;
  };
}

// Export for Node.js if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = IconValidator;
}
