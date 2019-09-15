import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirDataService } from './airdata.service';
import { AirDataController } from './airdata.controller';
import { AirData } from './airdata.entity';

@Module({
    imports: [TypeOrmModule.forFeature([AirData])],
    providers: [AirDataService],
    controllers: [AirDataController],
})
export class AirDataModule {}