import { Post, Schedule } from "../mainComponents/mainComponents";

export interface IDisplayController {
    displaySelectedFile(fileName: string, docSection: HTMLElement, baseText?: string): void,
    displayCurrentSchedules(schedule: Schedule, parentSection: HTMLElement): void,
}

export interface IRequestController {
    requestFileData(fileString: string): Promise<Post[]>,
    sendNewFile(schedule: Schedule): Promise<void>,
    requestCurrentSchedule(): Promise<Schedule>,
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
