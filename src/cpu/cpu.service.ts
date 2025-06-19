import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  processData(data: string): string {
    this.powerService.supplyPower(100); // Example power usage
    return `Processed data: ${data}`;
  }
}
