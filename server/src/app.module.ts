import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AirDataModule } from './airdata.module';
// import { ConfigModule } from '../config/config.module';

@Module({
    imports: [TypeOrmModule.forRoot(), AirDataModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    constructor(private readonly connection: Connection) {}
}
