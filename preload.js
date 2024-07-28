const { contextBridge, ipcRenderer } = require("electron/renderer");

contextBridge.exposeInMainWorld('electronAPI', {
    openURL: (url) => ipcRenderer.send('open-url', url)
})