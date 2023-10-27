export class CronEvent {
  constructor(public payload: CronPayload) {
  }
}

export type CronPayload = { jobName: string, eventName: string; cron: string; enable: boolean };
