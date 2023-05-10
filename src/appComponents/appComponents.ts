import { Post, Schedule } from "../mainComponents/mainComponents";

export interface IDisplayController {
    displaySelectedFile(docSection: HTMLElement,fileName?: string, event?: SubmitEvent, baseText?: string): void,
    displayCurrentSchedules(schedule: Schedule, parentSection: HTMLElement): void,
}

export interface IRequestController {
    requestFileData(fileString: string): Promise<Post[]>,
    sendNewFile(schedule: Schedule): Promise<void>,
    requestCurrentSchedule(): Promise<Schedule>,
}

export interface ITempSchedController {
    addToTempSchedule(fileData: Post[], schedule: Schedule): Schedule,
    clearTempSchedule(schedule: Schedule): void,
}

export interface IEventController {
    submitFile?(e: SubmitEvent): Promise<Post[]> ,
    submitSchedule?(schedule: Schedule): void,
    clearSection(docSection: HTMLElement, resetText?: string)
}
