import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { EventEmitter2 } from '@nestjs/event-emitter';
import crons from '../configs/crons.json';
import { CronJob } from 'cron';
import { CronEvent } from '../events/CronEvent';

@Injectable()
export class DynamicSchedulerConfiguration implements OnApplicationBootstrap {
  private logger = new Logger(DynamicSchedulerConfiguration.name);

  constructor(
    private schedulerRegistry: SchedulerRegistry,
    private eventEmitter: EventEmitter2
  ) {
  }

  async onApplicationBootstrap(): Promise<void> {
    for (const job of crons) {
      this.logger.log(`Processing job ${JSON.stringify(job)}`);
      const jobName = `cron.${job.eventName}`;
      const cronJob = new CronJob(job.cron, () => {
        this.logger.log(`time (${job.cron}) for job ${job.eventName} to run!`);
        this.eventEmitter.emit(jobName, new CronEvent({ ...job, jobName }));
      });

      this.schedulerRegistry.addCronJob(jobName, cronJob);

      if (job.enable) {
        cronJob.start();
      } else {
        this.logger.error(`Job ${JSON.stringify(job)} not enabled. Ignoring.`);
      }
    }
  }
}
