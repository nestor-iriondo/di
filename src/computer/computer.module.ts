import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { PowerModule } from 'src/power/power.module';
import { PowerService } from 'src/power/power.service';

@Module({
  controllers: [ComputerController],
  providers: [PowerService],
})
export class ComputerModule {}
