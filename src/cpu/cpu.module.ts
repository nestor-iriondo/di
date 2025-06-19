import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from 'src/power/power.module';

@Module({
  providers: [CpuService],
  imports: [PowerModule],
  exports: [CpuService], // Exporting CpuService so it can be used in other
})
export class CpuModule {}
