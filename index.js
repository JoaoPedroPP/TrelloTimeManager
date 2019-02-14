const electron = require('electron');
const Icon = require("./electronFiles/models/Icon/icon.model")
const fs = require('fs');
// const Counter = require('../TrelloTimeManager/electronFiles/models/TimerCounter/timerCounter.model');

const { app, BrowserWindow, ipcMain, } = electron;

let mainWindow;
let tray;
let monitor;

let cred = fs.readFileSync(`${__dirname}/credentials.json`,{
    encoding: "utf8"
})
cred = JSON.parse(cred);

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 300,
        height: 500,
        resizable: false,
        frame: false,
        show: false,
        webPreferences: { backgroundThrottling: false}
    })

    mainWindow.loadURL(`http://localhost:4000`);
    // mainWindow.loadURL(`file://${__dirname}/dist/TrelloTimeManager/index.html`);
    tray = new Icon(`${__dirname}/src/assets/icons8-planeta-saturno-48.png`, mainWindow)

    electron.powerMonitor.on('lock-screen', () => {
        console.log('lock');
    });

    electron.powerMonitor.on('unlock-screen', () => {
        console.log('unlock');
    });
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

ipcMain.on('timer:counting', (event, data) => {
    tray.setTitle(data);
})