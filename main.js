'use strict';

const stash = require('electron');
const app = stash.app;
const MainWindow = stash.BrowserWindow;
const HW = require('ethhw');
const ipcMain = stash.ipcMain;

// TODO: task2 poll in background for device connectivity
// TODO: popup overlay or dialogue if device disconnected/reconnected
// TODO: task3 move HW operations into queue where poller has priority

let windowRef;
app.on('ready', function () {
  HW.connect(Buffer("0000"));

  windowRef = new MainWindow({width: 633, height: 475});
  windowRef.on('closed', function() {
    windowRef = null;
  });

  windowRef.loadURL('file://' + __dirname + '/main.html');
  // windowRef.webContents.openDevTools();
  // TODO: task1 create 80%-black-opacity overlay + popup for password
});
app.on('window-all-closed', function () { app.quit(); });

ipcMain.on('password', function (event, arg) {
  HW.connect(Buffer(arg));
});

ipcMain.on('settings', function (event, arg) {
  switch (arg) {
    case "new-address":
      break;
    default:
  }
});
