import { Module } from '@nestjs/common';
import { DynamicSchedulerConfiguration } from './DynamicSchedulerConfiguration';

@Module({
  providers: [DynamicSchedulerConfiguration]
})
export class DynamicSchedulerModule {
}
