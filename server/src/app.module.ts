import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forRoot('mongodb://localhost:27018/airdata'), MongooseModule.forFeature([{ name: 'Airdata', schema: AirdataSchema }])]],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
