/// <reference path="./components/Components.ts">
import { Schedule, Post } from './mainComponents/mainComponents';

export interface ISendReq {
   getFileData: (path: string) => Post[],
   addNewFile: (data: string[]) => void,
   getCurrentSchedule: () => Schedule
  }
  
  declare global {
    interface Window {
      sendReq: ISendReq
    }
  }