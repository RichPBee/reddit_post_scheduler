"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require('electron'), contextBridge = _a.contextBridge, ipcRenderer = _a.ipcRenderer;
contextBridge.exposeInMainWorld('versions', {
    node: function () { return process.versions.node; },
    chrome: function () { return process.versions.chrome; },
    electron: function () { return process.versions.electron; },
});
contextBridge.exposeInMainWorld('sendReq', {
    getFileData: function (path) { return ipcRenderer.invoke('getFileData', path); },
    addNewFile: function (data) { return ipcRenderer.invoke('addNewFile', data); },
    getCurrentSchedule: function () { return ipcRenderer.invoke('getCurrentSchedule'); }
});
