import { Injectable, Logger } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { OnEvent } from '@nestjs/event-emitter';
import { CronEvent } from '../CronEvent';

@Injectable()
export class CronChecker {
  private logger = new Logger(CronChecker.name);

  constructor(private schedulerRegistry: SchedulerRegistry) {
  }

  @OnEvent('cron.**')
  public handle(payload: CronEvent) {
    const cronJob = this.schedulerRegistry.getCronJob(payload.payload.jobName);
    this.logger.error(
      `CronJob=${payload.payload.jobName};running=${cronJob.running}`
    );
  }
}
