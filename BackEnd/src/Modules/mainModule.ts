import{Module }from '@nestjs/common'
import { DatabaseModule } from './Database/DatabaseModule'
import { HotelModule } from './Hotel/HotelModule'
import {Connection }from "typeorm"
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './Database/Entities/User'
import { createConnection } from 'typeorm'
@Module({
    imports:[HotelModule,DatabaseModule],
    controllers:[]
})
export class AppModule{
} 