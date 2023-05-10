import Snoowrap from 'snoowrap';

const config = {
    userAgent: process.env.userAgent,
    username: process.env.username,
    password: process.env.password,
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret,
}

export const snoowrap = new Snoowrap({
    userAgent: config.userAgent,
    username: config.username,
    password: config.password,
    clientId: config.clientId,
    clientSecret: config.clientSecret
})

export type Post = {
    title: string,
    url: string,
    link?: string,
    nsfw: boolean,
    sendReplies: boolean,
    date: string,
    time: "now" | string,
    type: "link" | "text" | "image" | "video"
    comment?: string
}

export type Schedule = Array<Post[]>

export interface IInputChecker {
    validatePosts(postInput: Post[]): Post[]
}

export interface IScheduleCreator {
    createNewSchedule(fileData: string[]): Post[],
    createSchedule(fileData: string[]): Post[],
    checkPossiblePosts(postArray: Post[]): Post[],
    getCurrentDate(): string;
    getCurrentTime(): string;
    addToScheduleArray(possiblePosts: Array<Post>, scheduleArray: Schedule): Schedule
}

export interface IPostChecker {
    findPosts(schedule: Array<Post>): Array<Post>,
}

export interface IPoster {
    submitPost(schedule: Array<Post>): Promise<Snoowrap.Submission> | Array<Promise<Snoowrap.Submission>>,
    singlePost(schedule: Array<Post>): Promise<Snoowrap.Submission>,
    multiplePosts(schedule: Array<Post>) : Array<Promise<Snoowrap.Submission>>,
}

