import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AirData } from './airdata.entity';

@Injectable()
export class AirDataService {
    constructor(
        @InjectRepository(AirData)
        private readonly airDataRepository: Repository<AirData>,
    ) { }

    findAll(): Promise<AirData[]> {
        return this.airDataRepository.find();
    }
}