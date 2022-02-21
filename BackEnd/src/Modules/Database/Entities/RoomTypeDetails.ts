import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Room } from './Room';
@Entity()
export class RoomTypeDetails {
  @PrimaryGeneratedColumn()
  id: number

  @Column()//ermm... this shit is in waht currency again... bah details
  Pricing: number;

  @Column()
  Description: string;
  
  @OneToMany(type => Room,room => room) roomlist:Room[];

}