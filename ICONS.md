# Icon System Documentation

This startpage now supports multiple icon packs including Tabler Icons, Simple Icons, and Material Icons. You can mix and match icons from different packs within your configuration.

## Quick Start

1. **Keep it simple**: Use existing icon names and they'll work with Tabler Icons (default)
2. **Mix icon packs**: Add `icon_pack: "simple"` or `icon_pack: "material"` to any link
3. **Use shortcuts**: Try `icon: "simple:github"` or `icon: "material:home"`

## Supported Icon Packs

### 1. Tabler Icons (Default)
- **Pack ID**: `tabler`
- **Website**: https://tabler-icons.io/
- **Usage**: Icons use the format from Tabler (e.g., `brand-github`, `home`, `settings`)
- **Total Icons**: 4,000+ icons
- **Best for**: General UI icons, brand icons with "brand-" prefix

### 2. Simple Icons
- **Pack ID**: `simple`
- **Website**: https://simpleicons.org/
- **Usage**: Uses Simple Icons naming (e.g., `github`, `twitter`, `discord`)
- **Total Icons**: 2,500+ brand icons
- **Best for**: Brand and company logos

### 3. Material Icons
- **Pack ID**: `material`
- **Website**: https://fonts.google.com/icons
- **Usage**: Uses Material Icons naming (e.g., `home`, `settings`, `code`)
- **Total Icons**: 2,000+ icons
- **Best for**: Standard UI actions and concepts

## Configuration Examples

### Basic Usage (Backwards Compatible)
```javascript
{
  name: "GitHub",
  url: "https://github.com",
  icon: "brand-github",          // Uses default pack (tabler)
  icon_color: "#a6e3a1"
}
```

### Specify Different Icon Pack
```javascript
{
  name: "GitHub",
  url: "https://github.com",
  icon: "github",                // Icon name for Simple Icons
  icon_pack: "simple",           // Use Simple Icons pack
  icon_color: "#a6e3a1"
}
```

### String Format with Pack Prefix
```javascript
{
  name: "GitHub",
  url: "https://github.com",
  icon: "simple:github",         // pack:icon format
  icon_color: "#a6e3a1"
}
```

### Advanced Icon Object
```javascript
{
  name: "GitHub",
  url: "https://github.com",
  icon: {
    pack: "simple",              // Icon pack to use
    icon: "github",              // Icon name
    color: "#a6e3a1",           // Icon color (overrides icon_color)
    size: "24px",               // Custom size (optional)
    class: "custom-class"       // Additional CSS class (optional)
  }
}
```

## Icon Pack Mappings

When switching between icon packs, note that icon names may differ:

| Concept | Tabler Icons | Simple Icons | Material Icons |
|---------|-------------|--------------|----------------|
| GitHub | `brand-github` | `github` | `code` |
| Home | `home` | `home` | `home` |
| Settings | `settings` | `settings` | `settings` |
| Code | `code` | `code` | `code` |
| Email | `mail` | `gmail` | `email` |

## Adding Custom Icon Packs

You can register additional icon packs by extending the IconManager:

```javascript
// Add this after the IconManager is loaded
window.IconManager.registerIconPack('custom', {
  name: 'Custom Icons',
  prefix: 'custom-icon-',
  cssClass: 'custom-icon',
  type: 'font',
  cssFile: 'path/to/your/custom-icons.css'
});
```

## Debugging and Validation

The icon system includes a built-in validator to help you debug icon configurations. Open your browser's developer console and use these commands:

### Validate Your Configuration
```javascript
// Validate all icons in your current configuration
validateIcons();
```

### Get Icon Suggestions
```javascript
// Get suggestions for a specific term
suggestIcons("github");    // Returns icons for GitHub from different packs
suggestIcons("home");      // Returns home icons from different packs
```

### Check Icon Manager Status
```javascript
// Check if IconManager is loaded
console.log(window.IconManager);

// See all available icon packs
console.log(window.IconManager.getAllIconPacks());
```

## Troubleshooting

### Icon Not Showing
1. Check if the icon name exists in the specified pack
2. Verify the icon pack is properly loaded (check browser console for CSS loading errors)
3. Test with the validation tools: `validateIcons()` in console
4. Ensure the fallback icon is working

### Performance Considerations
- Icon packs are loaded from CDNs, which may affect initial load time
- Consider hosting icon fonts locally for better performance
- Only enable icon packs you actually use in your configuration

### Common Issues

**Wrong icon names**: Use the validation tools to check your configuration
```javascript
validateIcons(); // Check all icons at once
```

**Missing icon packs**: Simple Icons or Material Icons not loading
- Check browser network tab for failed CSS requests
- Verify CDN availability
- Consider using local copies of icon fonts

**Color not applying**: Make sure your color format is valid
- Use hex colors: `#ff0000`
- Use rgba: `rgba(255, 0, 0, 0.8)`
- Named colors: `red`, `blue`, etc.

## Examples

Here are some working examples:

```javascript
// Tabler Icons (default)
{ icon: "brand-youtube", icon_color: "#ff0000" }

// Simple Icons
{ icon: "youtube", icon_pack: "simple", icon_color: "#ff0000" }

// Material Icons
{ icon: "play_circle", icon_pack: "material", icon_color: "#ff0000" }

// Mixed usage in one category
{
  name: "social",
  links: [
    { name: "GitHub", icon: "brand-github", icon_color: "#333" },                    // Tabler
    { name: "Twitter", icon: "twitter", icon_pack: "simple", icon_color: "#1da1f2" }, // Simple
    { name: "Email", icon: "email", icon_pack: "material", icon_color: "#ea4335" }    // Material
  ]
}
```
