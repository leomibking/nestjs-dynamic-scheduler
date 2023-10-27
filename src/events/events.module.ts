import { Module } from '@nestjs/common';
import { EventABCHandler } from './handlers/EventABCHandler';
import { EventDEFHandler } from './handlers/EventDEFHandler';
import { EventGHIHandler } from './handlers/EventGHIHandler';

@Module({
  providers: [EventABCHandler, EventDEFHandler, EventGHIHandler]
})
export class EventsModule {
}
