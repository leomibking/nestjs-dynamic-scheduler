import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { CronEvent } from '../CronEvent';

@Injectable()
export class EventGHIHandler {
  private logger = new Logger(EventGHIHandler.name);

  @OnEvent('cron.event.ghi')
  public async handle(payload: CronEvent): Promise<void> {
    this.logger.log(JSON.stringify(payload));
  }
}
