import { Schedule } from "../mainComponents/mainComponents";
import { IDisplayController } from "./appComponents";

export class DisplayController implements IDisplayController {
    displaySelectedFile(docSection: HTMLElement, fileName?: string, event?: SubmitEvent, baseText?: string): void {
        if (baseText) {
            if (event) {
                const file = event.target[ 0 ].files[ 0 ];
                docSection.innerText =`${baseText}${file.path}`;
            }
            else {
                docSection.innerText = `${baseText}${fileName}`;
            }
        }
        else 
        {
            if (event) {
                const file = event.target[ 0 ].files[ 0 ];
                docSection.innerText =`${baseText}${file.path}`;
            }
            else {
                docSection.innerText = `${fileName}`
            }
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