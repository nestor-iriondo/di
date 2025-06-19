import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  readData(): string {
    this.powerService.supplyPower(50); // Example power usage
    return 'Reading data from disk.';
  }
}
