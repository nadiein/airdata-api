import { Controller, Get } from '@nestjs/common';
import { AirDataService } from './airdata.service';
import { AirData } from './airdata.entity';

@Controller()
export class AirDataController {
    constructor(private readonly airDataService: AirDataService) {}

    @Get()
    findAll(): Promise<AirData[]> {
        return this.airDataService.findAll();
    }
}