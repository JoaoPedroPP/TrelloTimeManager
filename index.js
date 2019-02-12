const electron = require('electron');
const fs = require('fs');
// const Counter = require('../TrelloTimeManager/electronFiles/models/TimerCounter/timerCounter.model');

const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

let cred = fs.readFileSync(`${__dirname}/credentials.json`,{
    encoding: "utf8"
})
cred = JSON.parse(cred);

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 300,
        height: 500,
        resizable: false
    })

    mainWindow.loadURL(`http://localhost:4000`);
    // mainWindow.loadURL(`file://${__dirname}/dist/TrelloTimeManager/index.html`);
});

ipcMain.on('setNewAPIKey', (event, data) => {
    console.log(data);
    cred.key = data.key;
    cred.token = data.token
    fs.writeFileSync(`${__dirname}/credentials.json`, JSON.stringify(cred, null, 2));
    mainWindow.webContents.send('key:set', cred);
});

ipcMain.on('key:get', (event) => {
    mainWindow.webContents.send('key:get:response', cred);
});