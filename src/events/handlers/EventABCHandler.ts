import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { CronEvent } from '../CronEvent';

@Injectable()
export class EventABCHandler {
  private logger = new Logger(EventABCHandler.name);

  @OnEvent('cron.event.abc')
  public async handle(payload: CronEvent): Promise<void> {
    this.logger.log(JSON.stringify(payload));
  }
}
