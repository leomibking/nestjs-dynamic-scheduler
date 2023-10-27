import { Module } from '@nestjs/common';
import { EventABCHandler } from './handlers/EventABCHandler';
import { EventDEFHandler } from './handlers/EventDEFHandler';
import { EventGHIHandler } from './handlers/EventGHIHandler';
import { CronChecker } from './handlers/CronChecker';

@Module({
  providers: [EventABCHandler, EventDEFHandler, EventGHIHandler, CronChecker]
})
export class EventsModule {
}
