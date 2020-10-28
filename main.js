const { app, BrowserWindow } = require('electron')

async function createWindow () {
    const win = new BrowserWindow({
        width: 1301,
        height: 910,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.setIcon("./Content/fishlogo.png");


    await win.loadURL("http://localhost:3000");
    win.webContents.openDevTools()
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
