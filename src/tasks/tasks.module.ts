import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
})

/**
 * What are the available properties for the @Module() decorator?
 * Imports allows us to import modules,
 * exports to export modules or providers,
 * controllers to include a controller in the module
 * and providers to include providers/services in the module.
 */
export class TasksModule {}
