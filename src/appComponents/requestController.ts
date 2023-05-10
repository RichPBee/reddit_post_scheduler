import { Post, Schedule } from "../mainComponents/mainComponents";
import { IRequestController } from "./appComponents";

export class RequestController implements IRequestController {
    async requestFileData(fileString: string): Promise<Post[]>{
        let fileData;
        return fileData = await window.sendReq.getFileData(fileString);
    }

    async sendNewFile(schedule: Schedule): Promise<void> {
       await schedule.forEach((subSchedule) => {
        window.sendReq.addNewFile(subSchedule)
       })
    }

    async requestCurrentSchedule(): Promise<Schedule> {
        let currentSchedules;
        return currentSchedules = await window.sendReq.getCurrentSchedule();
    }
}