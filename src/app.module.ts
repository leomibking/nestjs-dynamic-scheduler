import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DynamicSchedulerModule } from './dynamic-scheduler/dynamic-scheduler.module';
import { ScheduleModule } from '@nestjs/schedule';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot({ wildcard: true }),
    DynamicSchedulerModule,
    EventsModule
  ],
  controllers: [AppController],
  providers: []
})
export class AppModule {
}
