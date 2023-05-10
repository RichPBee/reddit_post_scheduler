"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _a = require('electron'),
  contextBridge = _a.contextBridge,
  ipcRenderer = _a.ipcRenderer;
contextBridge.exposeInMainWorld('versions', {
  node: function node() {
    return process.versions.node;
  },
  chrome: function chrome() {
    return process.versions.chrome;
  },
  electron: function electron() {
    return process.versions.electron;
  }
});
contextBridge.exposeInMainWorld('sendReq', {
  getFileData: function getFileData(path) {
    return ipcRenderer.invoke('getFileData', path);
  },
  addNewFile: function addNewFile(data) {
    return ipcRenderer.invoke('addNewFile', data);
  },
  getCurrentSchedule: function getCurrentSchedule() {
    return ipcRenderer.invoke('getCurrentSchedule');
  }
});