import { Controller, Get, Logger, Post, Query } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';

@Controller('/jobs')
export class AppController {
  private logger = new Logger(AppController.name);

  constructor(private schedulerRegistry: SchedulerRegistry) {
  }

  @Get()
  async getJobs(): Promise<any> {
    const jobs = this.schedulerRegistry.getCronJobs();
    const result = {};
    jobs.forEach(
      (job, jobName) =>
        (result[jobName] = { running: job.running, cron: job.cronTime.source })
    );
    return result;
  }

  @Post('/start')
  async start(@Query('jobName') jobName: string): Promise<string> {
    const job = this.schedulerRegistry.getCronJob(jobName);
    if (!job.running) {
      job.start();
      return `Job ${jobName} started`;
    } else {
      return `Job ${jobName} is already started`;
    }
  }

  @Post('/stop')
  async stop(@Query('jobName') jobName: string): Promise<string> {
    const job = this.schedulerRegistry.getCronJob(jobName);
    if (job.running) {
      job.stop();
      return `Job ${jobName} stopped`;
    } else {
      return `Job ${jobName} is already stopped`;
    }
  }
}
