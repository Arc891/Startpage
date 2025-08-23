# Catppuccin Startpage - This is a fork for my (Arc891) personal tabs, all credit goes to [pivoshenko](https://github.com/pivoshenko)

<h3 align="center">
  <img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
  <img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
  Catppuccin <a href="https://github.com/pivoshenko/catppuccin-startpage">Startpage</a>
  <img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
  <a href="https://github.com/pivoshenko/catppuccin-startpage/stargazers">
    <img src="https://img.shields.io/github/stars/pivoshenko/catppuccin-startpage?style=for-the-badge&logo=starship&color=a6e3a1&logoColor=D9E0EE&labelColor=302D41">
  </a>
  <a href="https://github.com/pivoshenko/catppuccin-startpage/issues">
    <img src="https://img.shields.io/github/issues/pivoshenko/catppuccin-startpage?style=for-the-badge&logo=gitbook&color=fab387&logoColor=D9E0EE&labelColor=302D41">
  </a>
  <a href="https://github.com/pivoshenko/catppuccin-startpage/contributors">
    <img src="https://img.shields.io/github/contributors/pivoshenko/catppuccin-startpage?style=for-the-badge&logo=github&color=f38ba8&logoColor=D9E0EE&labelColor=302D41">
  </a>
</p>

https://github.com/pivoshenko/catppuccin-startpage/assets/40499728/d96c8bd6-168e-408f-b4f0-0e339569c696

> [!NOTE]
>  A live demo can be found [here](https://pivoshenko.github.io/catppuccin-startpage)

## Overview

Aesthetic and clean startpage in [**Catppuccin Mocha**](https://catppuccin.com/palette) style, hosted on GitHub Pages. This start page is based on the [`dawn`](https://github.com/b-coimbra/dawn) and [`tartarus-startpage`](https://github.com/AllJavi/tartarus-startpage), which has even more functionality.
I've tweaked the page's style to match [Catppuccin](https://github.com/catppuccin/catppuccin) palette and my [`dotfiles`](https://github.com/pivoshenko/dotfiles).

### Features

- **Multiple Icon Packs**: Support for Tabler Icons, Simple Icons, and Material Icons
- **Flexible Icon Configuration**: Mix and match icons from different packs
- **Popup Window Support**: Open links in custom popup windows
- **Weather Integration**: Display weather information for your location
- **Customizable Tabs**: Organize your bookmarks into themed tabs
- **Icon Validation Tools**: Built-in validation and debugging tools

### Main principles

- Minimalism in everything
- Consistency
- Simplicity
- One style
- Reduced visual noise

## Usage

1. Fork this repository and clone it

2. Remove `.github` directory as it contains only PR templates, issue labels etc that are linked to this repository

3. Update [`userconfig.js`](userconfig.js):
   - Set your location for the weather widget
   - Update the number of pages and their banners
   - Update bookmarks and quick links for the one you are using the most :3
   - Configure your preferred icon packs and styles

## Icon System

This startpage supports multiple icon packs that you can mix and match:

### Supported Icon Packs
- **Tabler Icons** (default): 4,000+ general purpose icons
- **Simple Icons**: 2,500+ brand and company logos  
- **Material Icons**: 2,000+ standard UI icons

### Basic Icon Usage
```javascript
// Use default pack (Tabler Icons)
{ icon: "brand-github", icon_color: "#a6e3a1" }

// Specify different pack
{ icon: "github", icon_pack: "simple", icon_color: "#a6e3a1" }

// Use pack:icon format
{ icon: "simple:github", icon_color: "#a6e3a1" }
```

For detailed icon configuration examples and debugging tools, see [ICONS.md](ICONS.md).

> [!TIP]
> You can find icons for your bookmarks using [`tabler-icons`](https://tabler.io/icons)
>
> If you want to reduce the loading time of the icons, you could install the icon [font](src/fonts) locally and activate the option `"localIcons": true` in the config to disable the remote styles

#### As Homepage

- Click the menu button and select `Options/Preferences`
- Click the home panel
- Click the menu next to the homepage and new windows and choose to show custom URLs and add your GitHub Pages link

#### As New Tab

You can use different Add-ons/Extensions for it
- If you use Firefox: [Custom New Tab Page](https://addons.mozilla.org/en-US/firefox/addon/custom-new-tab-page/?src=search) and make sure you enable "Force links to open in the top frame (experimental)" in the extension's preferences page

- If you use Chromium (Brave, Chrome): [Custom New Tab URL](https://chrome.google.com/webstore/detail/custom-new-tab-url/mmjbdbjnoablegbkcklggeknkfcjkjia)


### Available banners

| cbg-2                                           | cbg-3                                           | cbg-4                                           | cbg-5                                           |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| <img src="src/img/banners/cbg-2.gif" width=175> | <img src="src/img/banners/cbg-3.gif" width=175> | <img src="src/img/banners/cbg-4.gif" width=175> | <img src="src/img/banners/cbg-5.gif" width=175> |

| cbg-6                                           | cbg-7                                           | cbg-8                                           | cbg-9                                           |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| <img src="src/img/banners/cbg-6.gif" width=175> | <img src="src/img/banners/cbg-7.gif" width=175> | <img src="src/img/banners/cbg-8.gif" width=175> | <img src="src/img/banners/cbg-9.gif" width=175> |

| cbg-10                                           | cbg-11                                           | cbg-12                                           | cbg-13                                           |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| <img src="src/img/banners/cbg-10.gif" width=175> | <img src="src/img/banners/cbg-11.gif" width=175> | <img src="src/img/banners/cbg-12.gif" width=175> | <img src="src/img/banners/cbg-13.gif" width=175> |
