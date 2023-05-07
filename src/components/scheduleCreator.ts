/// <reference path="Components.ts">

import { IScheduleCreator, Post, Schedule } from "./Components";

export class ScheduleCreator implements IScheduleCreator {
    createNewSchedule(fileData: string[]): Post[] {
        return this.createSchedule(fileData);
    }

    createSchedule(fileData: string[]): Post[] {
        let newSchedule: Post[] = [];
        let headers = fileData[0].split(',');
        for (let i = 1; i < Array.length; i ++) {
            let thisPostData  = fileData[i].split(',');
            let thisPostObject = {};
            for (let j = 0; j < thisPostData.length; j++) {
                thisPostObject[headers[j].trim()] = thisPostData[j].trim();
            }
            newSchedule.push(thisPostObject as Post);
        }
        return this.checkPossiblePosts(newSchedule);
    }

    checkPossiblePosts(postArray: Post[]): Post[] {
        let possiblePostArray: Post[] = [];
        let d1 = Date.parse(`${this.getCurrentDate}T${this.getCurrentTime}`)
        postArray.forEach((post) => {
            let d2 = Date.parse(`${post.date}T${post.time}`)
            if (d2 > d1) {
                possiblePostArray.push(post);
            }
        })
        return possiblePostArray;
    }

    getCurrentTime() {
        let date = new Date
        let hours = date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`
        let minutes = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`
        return `${hours}:${minutes}`;
    }

    getCurrentDate() {
        let date = new Date
        let month = date.getMonth() >= 9 ? date.getMonth() + 1 : `0${(date.getMonth()) + 1}`
        return `${date.getFullYear()}-${month}-${date.getDate()}`;
    }

    addToScheduleArray(possiblePosts: Post[], scheduleArray: Schedule): Schedule {
        scheduleArray.push(possiblePosts)
        return scheduleArray
    }
}
