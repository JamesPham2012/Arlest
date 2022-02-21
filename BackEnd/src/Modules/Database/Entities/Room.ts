
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { RoomTypeDetails } from './RoomTypeDetails';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  RoomID: number;

  @Column({ default: true })//?
  isVacant: boolean;


  @ManyToOne(type => RoomTypeDetails, room =>room.roomlist) 
  @JoinColumn({name:"RoomType"})// naming convention for table 
  RoomType:RoomTypeDetails;     // naming of variable for OOP 
}