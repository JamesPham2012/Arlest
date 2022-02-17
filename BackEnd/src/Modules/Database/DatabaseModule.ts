
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Room } from './Entities/Room';
import { RoomTypeDetails } from './Entities/RoomTypeDetails';
import { User } from './Entities/User';


@Module({
  imports:[
      TypeOrmModule.forRoot({
        type:'postgres',
        host: 'localhost',
        port: 2014,
        username: 'admin',
        password: 'admin',
        database: 'BookingRDBMS',
        entities: [User,Room,RoomTypeDetails],
        synchronize:true
      
      
})]})
export class DatabaseModule {
}