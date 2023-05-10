import { Post, Schedule } from "../mainComponents/mainComponents";
import { IEventController } from "./appComponents";

export class EventController implements IEventController {
    clearSection(docSection: HTMLElement, resetText?: string) {
        if (resetText) {
            docSection.innerText = `${resetText}`;
        }
        else 
        {
            docSection.innerText = ``
        }
    }

    async submitFile(e: SubmitEvent): Promise<Post[]> {
        e.preventDefault
        const file = e.target[ 0 ].files[ 0 ];
        const fileString = `${file.path}`;
        const fileData = await window.sendReq.getFileData(fileString);
        return fileData;
    }

    async submitSchedule(schedule: Schedule): Promise<void> {
        await schedule.forEach((subSchedule) => {
            window.sendReq.addNewFile(subSchedule);
        })
    }
}