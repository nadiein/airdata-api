import { Module } from '@nestjs/common';
import { AirDataModule } from './airdata.module';
import { AirDataService } from './airdata.service';
import { AirDataController } from './airdata.controller';

@Module({
    imports: [AirDataModule],
    providers: [AirDataService],
    controllers: [AirDataController]
})
export class AirDataHttpModule {}
