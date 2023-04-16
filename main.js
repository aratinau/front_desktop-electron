const { app, BrowserWindow } = require('electron')

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        frame: false,
        transparent: true,
        frame: false,
        hasShadow: false,
        fullscreenable: false,
        alwaysOnTop: true,
        resizable: false,
        minimizable: false,
        maximizable: false,
        transparent: true,
        titleBarStyle: 'customButtonsOnHover',
        closable: false,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false,
        },
    })

    win.loadFile('index.html')
}

app.whenReady().then(createWindow)

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
