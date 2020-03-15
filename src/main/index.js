'use strict'

import { app, BrowserWindow } from 'electron'
import registerWorker from './register.js'

const DELAY = 3000
const path = require('path')
const isDev = require('electron-is-dev')

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow

function createMainWindow() {
  const window = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      webSecurity: !isDev
    }
  })

  if (isDev) {
    window.webContents.openDevTools()
    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
  }
  else {
    window.loadURL(`file://${path.join(__dirname, '../../dist/renderer/index.html')}`)
  }

  window.on('closed', () => {
    mainWindow = null
  })

  window.webContents.on('devtools-opened', () => {
    window.focus()
    setImmediate(() => {
      window.focus()
    })
  })

  return window
}

// quit application when all windows are closed
app.on('window-all-closed', () => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // on macOS it is common to re-create a window even after all windows have been closed
  if (mainWindow === null) {
    mainWindow = createMainWindow()
    // we use delay to be sure that an error appears only after worker is called
    setTimeout(() => {
      registerWorker()
    }, DELAY)
  }
})

// create main BrowserWindow when electron is ready
app.on('ready', () => {
  mainWindow = createMainWindow()
  // we use delay to be sure that an error appears only after worker is called
  setTimeout(() => {
    registerWorker()
  }, DELAY)
})