const { BrowserWindow, app } = require("electron")
const url = require('url')
const path = require('path')
// const isDev = require('electron-is-dev')

const createWindow = () => {
    const window = new BrowserWindow({
        width: 1920,
        minWidth: 384,
        height: 1080,
        minHeight: 768,
        title: "Tetsudai",
        titleBarStyle: 'hidden',
        trafficLightPosition: { x: 10, y: 10 },
        frame: false
    })

    // window.webContents.openDevTools()

    // window.setMenuBarVisibility(false)

    const baseURL = path.join(__dirname, '/build/index.html')

    window.loadURL(url.format({
        pathname: baseURL,
        protocol: "file:",
        slashes: true
    }))
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })