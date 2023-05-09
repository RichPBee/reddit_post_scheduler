/// <reference path="./mainComponents/mainComponents.ts">
/// <reference path="./mainComponents/inputChecker.ts">
/// <reference path="./mainComponents/postChecker.ts">
/// <reference path="./mainComponents/poster.ts">
/// <reference path="./mainComponents/scheduleCreator.ts">
import { Schedule } from './mainComponents/mainComponents';
import { ScheduleCreator } from './mainComponents/scheduleCreator';


const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path')
const fs = require('fs').promises;
let schedule: Schedule = [];
let scheduleCreator = new ScheduleCreator();

const readFilePath = async (fileName: string): Promise<string[]> => {
    let fileData = await fs.readFile(fileName, function(err, data) {
        if(err) {
            return console.log(err);
        }
        return data
    });
    let dataArray = fileData.toString().split('\n');
    return dataArray;
}

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })
    ipcMain.handle('getFileData', async (event, fileName: string): Promise<string[]> => {
        return await readFilePath(fileName);
    })
    ipcMain.handle('addNewFile', async(event, data: string[]) => {
        let possiblePosts = scheduleCreator.createNewSchedule(data);
        schedule = scheduleCreator.addToScheduleArray(possiblePosts, schedule);
    })
    ipcMain.handle('getCurrentSchedule', () => {
        return schedule;
    })
    win.loadFile('./src/index.html');
}

app.whenReady().then(() => {
    createWindow();
})