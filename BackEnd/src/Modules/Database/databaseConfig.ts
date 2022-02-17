import { createConnection } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Room } from './Entities/Room';
import { RoomTypeDetails } from './Entities/RoomTypeDetails';
import { User } from './Entities/User';

 export const typeormConfig: PostgresConnectionOptions  = {
    type:'postgres',
    host: 'localhost',
    port: 2014,
    username: 'admin',
    password: 'admin',
    database: 'BookingRDBMS',
    entities: [User,Room,RoomTypeDetails],
    synchronize:true
 }