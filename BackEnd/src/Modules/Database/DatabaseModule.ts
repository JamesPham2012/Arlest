
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dirname } from 'path/posix';
import { Connection } from 'typeorm';
import { BookingOrder } from './Entities/BookingOrder';
import { Room } from './Entities/Room';
import { RoomTypeDetails } from './Entities/RoomTypeDetails';
import { User } from './Entities/User';


@Module({
  imports:[TypeOrmModule.forRoot()]
})
export class DatabaseModule {
}