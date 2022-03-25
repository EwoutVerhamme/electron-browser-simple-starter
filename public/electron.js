const { app, BrowserWindow, session } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");

const createMainWindow = () => {
  let mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
      devTools: true,
      webviewTag: true,
    },
  });

  // mainWindow.maximize();
  mainWindow.webContents.openDevTools();

  const startURL = isDev
    ? "http://localhost:3000"
    : `file://${path.join(__dirname, "../build/index.html")}`;

  mainWindow.loadURL(startURL);

  mainWindow.once("ready-to-show", () => mainWindow.show());

  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  mainWindow.webContents.on("new-window", (event, url) => {
    event.preventDefault();
    mainWindow.loadURL(url);
  });
};

app.whenReady().then(() => {
  const filter = { urls: ['*://*.example.com/*'] };

  session.defaultSession.webRequest.onHeadersReceived(filter, (details, callback) => {
      details.responseHeaders['Access-Control-Allow-Origin'] = [ 'http://localhost:3000' ];
      callback({ responseHeaders: details.responseHeaders });
  });
  createMainWindow();

  app.on("activate", () => {
    if (!BrowserWindow.getAllWindows().length) {
      createMainWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
