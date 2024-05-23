# TabZip

TabZip is a Chrome extension that allows you to compress all currently open tabs into a single string, which can be easily copied and shared. You can then use this string to restore the tabs on another machine or browser.

## Features

- **Compress Tabs**: Compress all open tabs into a single string.
- **Restore Tabs**: Restore tabs from a previously compressed string.
- **Clipboard Integration**: Automatically copy the compressed string to the clipboard.

## Installation

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory where you downloaded or cloned this repository.

## Usage

### Compressing Tabs

1. Click on the TabZip extension icon in the Chrome toolbar.
2. In the popup window, click the "Compress" button.
3. A string representing all open tabs will be copied to your clipboard.
4. You can paste this string anywhere to save or share it.

### Restoring Tabs

1. Click on the TabZip extension icon in the Chrome toolbar.
2. In the popup window, paste the previously copied string into the input field.
3. Click the "Restore" button.
4. All tabs encoded in the string will be opened in new tabs.

## How It Works

- **Compression**: Tab URLs are serialized into JSON and compressed using BASE64 for efficient storage and transmission.
- **Decompression**: The extension can decode the compressed string to restore the original URLs.

## Credits

<a href="https://www.flaticon.com/free-icons/ui" title="ui icons">Ui icons created by Creatype - Flaticon</a>
