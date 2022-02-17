
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dirname } from 'path/posix';
import { Connection } from 'typeorm';
import { BookingOrder } from './Entities/BookingOrder';
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
        entities: ['dist/Modules/Database/Entities/*.js'],
        migrationsTableName: "migTable",
        migrations: ["dist/Modules/Database/Migrations/*.js"],
        cli: {
            "migrationsDir": "./Migrations"
        },
        synchronize:true
      })
  ]
})
export class DatabaseModule {
}