import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { PowerModule } from 'src/power/power.module';

@Module({
  providers: [DiskService],
  imports: [PowerModule],
  exports: [DiskService], // Exporting DiskService so it can be used in other
})
export class DiskModule {}
