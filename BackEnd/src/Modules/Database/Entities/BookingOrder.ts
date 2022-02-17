import { Entity, Column, PrimaryGeneratedColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { Room } from './Room';
@Entity()
export class BookingOrder {
 @PrimaryColumn()
 RoomID:number;

 @PrimaryColumn()
 UserID:number;

}