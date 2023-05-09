let tempSchedule = [];
let nameArray = [];

const submitForm = document.getElementById('file-submitter');
const selectedFileSection = document.getElementById('selected-file');
const queuedFiles = document.getElementById('current-queue');
const createScheduleButton = document.getElementById('create-schedule');
const clearSelectionButton = document.getElementById('clear-selection');
const currentScheduleSection = document.querySelector('.current-schedules');

const displayLastSelectedFile = (fileName: string) => {
    selectedFileSection.innerText = `Selected File: ${fileName}`;
};

const displaySelectedFiles = () => {
    queuedFiles.innerHTML = `Current Queue: `

    if (nameArray.length > 3) {
        for (let i = 0; i <=3 ; i++) {
            if (i === 3) {
                queuedFiles.innerHTML += `+${nameArray.length - 3}`
            } 
            else {
                queuedFiles.innerHTML += `${nameArray[i]}, `
            }
        }
    }
    else {
        nameArray.forEach((name) => {
            queuedFiles.innerHTML += `${name}, `
        })
    }
}

const displayCurrentSchedules = async () => {
    const currentSchedules = await window.sendReq.getCurrentSchedule();
    currentSchedules.forEach((schedule) => {
        const scheduleCard = document.createElement('div');
        scheduleCard.innerText = `${schedule.length}`;
        scheduleCard.setAttribute('height', '20%');
        scheduleCard.setAttribute('width', '40%');
        scheduleCard.setAttribute('border', '3px solid black');
        scheduleCard.setAttribute('background-color', 'grey');
        currentScheduleSection.appendChild(scheduleCard);
    });
};

const addToTempSchedule = (fileData: any) => {
    tempSchedule.push(fileData);
};

submitForm.addEventListener('submit', async e => {
    e.preventDefault();
    const file = e.target[0].files[0];
    const fileString: string = `${file.path}`;
    const fileData = await window.sendReq.getFileData(fileString);
    nameArray.unshift(file.name);
    addToTempSchedule(fileData);
    displayLastSelectedFile(file.name);
    displaySelectedFiles();
    (document.getElementById('file-selector-input') as HTMLInputElement).value = "";
});

createScheduleButton.addEventListener('click', async () => {
    await tempSchedule.forEach((schedule) => {
        window.sendReq.addNewFile(schedule);
    })
    displayCurrentSchedules();
});

clearSelectionButton.addEventListener('click', () => {
    tempSchedule = [];
    selectedFileSection.innerText = `Selected File: `;
    queuedFiles.innerText = `Current Queue: `
});
