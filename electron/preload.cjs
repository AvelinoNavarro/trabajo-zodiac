const { contextBridge } = require("electron");

// Expose only safe, purpose-specific APIs here when the app needs them.
contextBridge.exposeInMainWorld("desktopApp", {
  platform: process.platform
});
