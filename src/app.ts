import { DisplayController } from "./appComponents/displayController";
import { EventController } from "./appComponents/eventController";
import { RequestController } from "./appComponents/requestController";
import { TempSchedController } from "./appComponents/tempSchedController";
import 'core-js/stable';

const displayController = new DisplayController();
const eventController = new EventController();
const requestController = new RequestController();
const tSController = new TempSchedController();

let tempSchedule = [];

const submitForm = document.getElementById('file-submitter');
const selectedFileSection = document.getElementById('selected-file');
const createScheduleButton = document.getElementById('create-schedule');
const clearSelectionButton = document.getElementById('clear-selection');
const currentScheduleSection = document.querySelector('.current-schedules') as HTMLElement;

submitForm.addEventListener('submit', async e => {
    e.preventDefault();
    const fileData = await eventController.submitFile(e);
    tempSchedule = tSController.addToTempSchedule(fileData, tempSchedule);
    displayController.displaySelectedFile(selectedFileSection, '', e, `Selected File: ` );
    (document.getElementById('file-selector-input') as HTMLInputElement).value = "";
});

createScheduleButton.addEventListener('click', async () => {
    eventController.submitSchedule(tempSchedule);
    const currentSchedule = await requestController.requestCurrentSchedule();
    displayController.displayCurrentSchedules(currentSchedule, currentScheduleSection);
});

clearSelectionButton.addEventListener('click', () => {
    tempSchedule = tSController.clearTempSchedule(tempSchedule);
    eventController.clearSection(selectedFileSection, `Selected File: ` );
});
