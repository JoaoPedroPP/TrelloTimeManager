const electron = require('electron');

const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 300,
        height: 500,
        resizable: false
    })

    mainWindow.loadURL(`http://localhost:4000`);
});

ipcMain.on('setNewAPIKey', (event, data) => {
    console.log(data);
});