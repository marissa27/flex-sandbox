const { app, BrowserWindow } = require('electron');

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    minWidth: 800,
    minHeight: 700
  });

  console.log('The application is ready');

  mainWindow.loadURL('http://localhost:3000');

  mainWindow.webContents.openDevTools();

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
});

app.on('before-quit', () => {
  console.log('The application is closed');
});
