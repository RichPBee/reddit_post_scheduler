import { Post } from "./mainComponents/mainComponents"

const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
})

contextBridge.exposeInMainWorld('sendReq', {
    getFileData: (path: string): string[] => ipcRenderer.invoke('getFileData', path),
    addNewFile: (data: Post[]) => ipcRenderer.invoke('addNewFile', data),
    getCurrentSchedule: () => ipcRenderer.invoke('getCurrentSchedule')
})