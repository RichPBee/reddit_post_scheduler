import { Post, Schedule } from "../mainComponents/mainComponents";
import { ITempSchedController } from "./appComponents";

export class TempSchedController implements ITempSchedController {
    addToTempSchedule(fileData: Post[], schedule: Schedule): Schedule {
        schedule.push(fileData);
        return schedule
    }

    clearTempSchedule(schedule: Schedule): Schedule {
        schedule = []
        return schedule;
    }
}