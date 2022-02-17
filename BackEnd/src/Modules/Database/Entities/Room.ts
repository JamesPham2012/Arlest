import { RoutesMapper } from '@nestjs/core/middleware/routes-mapper';
import { type } from 'os';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { RoomTypeDetails } from './RoomTypeDetails';

@Entity("RoomTable")
export class Room {
  @PrimaryGeneratedColumn()
  RoomID: number;

  @Column({ default: true })//?
  isVacant: boolean;


  @ManyToOne(type => RoomTypeDetails, room =>room.roomlist) 
  @JoinColumn({name:"RoomType"})// naming convention for table 
  RoomType:RoomTypeDetails;     // naming of variable for OOP 
}