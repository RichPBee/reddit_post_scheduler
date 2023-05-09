import { Post, Schedule } from "../mainComponents/mainComponents";

export interface IDisplayController {
    displaySelectedFile(fileName: string, docSection: HTMLElement): void,
    displayCurrentSchedules(): void,
}

export interface IRequestController {
    requestFileData(fileString: string): Post[],
    sendNewFile(schedule: Schedule): void,
    requestCurrentSchedule(): Schedule,
}

export interface ITempSchedController {
    addToTempSchedule(fileData: Post[]): void,
    clearTempSchedule(schedule: Schedule): void,
}

export interface IEventController {
    submitFile?(e: SubmitEvent): Post[],
    submitSchedule?(schedule: Schedule): void,
    clearSection(docSection: HTMLElement, resetText?: string)
}
