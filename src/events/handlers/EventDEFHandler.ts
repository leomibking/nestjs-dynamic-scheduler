import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { CronEvent } from '../CronEvent';

@Injectable()
export class EventDEFHandler {
  private logger = new Logger(EventDEFHandler.name);

  @OnEvent('event.def')
  public async handle(payload: CronEvent): Promise<void> {
    this.logger.log(JSON.stringify(payload));
  }
}
