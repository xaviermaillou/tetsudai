const { BrowserWindow, app, ipcMain } = require("electron")
const url = require('url')
const path = require('path')
const { autoUpdater } = require("electron-updater")
// const isDev = require('electron-is-dev')

const createWindow = () => {
  const window = new BrowserWindow({
      width: 1400,
      minWidth: 384,
      height: 900,
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
  autoUpdater.setFeedURL({
    provider: 'github',
    owner: 'xaviermaillou',
    repo: 'tetsudai',
    releaseType: 'release'
  })
  autoUpdater.checkForUpdatesAndNotify()

  autoUpdater.on('update-available', () => {
    window.webContents.send('update_available');
  })
  
  autoUpdater.on('update-not-available', () => {
    window.webContents.send('update_not_available');
  })
  
  autoUpdater.on('update-downloaded', () => {
    window.webContents.send('update_downloaded');
  })
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

ipcMain.on('restart_app', () => {
  autoUpdater.quitAndInstall();
});