import { Schedule } from "../mainComponents/mainComponents";
import { IDisplayController } from "./appComponents";

export class DisplayController implements IDisplayController {
    displaySelectedFile(fileName: string, docSection: HTMLElement, baseText?: string): void {
        if (baseText) {
            docSection.innerText = `${baseText}${fileName}`;
        }
        else 
        {
            docSection.innerText = `${fileName}`
        }
    }

    displayCurrentSchedules(schedule: Schedule, parentSection: HTMLElement): void {
        schedule.forEach((schedule) => {
            const scheduleCard = document.createElement('div');
            scheduleCard.innerText = `${schedule.length}`;
            scheduleCard.setAttribute('height', '20%');
            scheduleCard.setAttribute('width', '40%');
            scheduleCard.setAttribute('border', '3px solid black');
            scheduleCard.setAttribute('background-color', 'grey');
            parentSection.appendChild(scheduleCard);
        })
    }
}