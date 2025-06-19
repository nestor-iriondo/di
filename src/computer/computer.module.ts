import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { PowerService } from 'src/power/power.service';
import { DiskModule } from 'src/disk/disk.module';
import { CpuModule } from 'src/cpu/cpu.module';

@Module({
  controllers: [ComputerController],
  providers: [PowerService],
  imports: [DiskModule, CpuModule],
})
export class ComputerModule {}
