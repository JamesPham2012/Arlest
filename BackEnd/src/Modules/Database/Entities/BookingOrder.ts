import { Entity, Column, PrimaryGeneratedColumn, OneToMany, PrimaryColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Room } from './Room';
import { User } from './User';
@Entity("BookingOrderTable")
export class BookingOrder {
    @ManyToOne(type => User, { primary: true })
    @JoinColumn({ name: "UserID" })
    User: User;

    @OneToOne(type => Room, { primary: true })
    @JoinColumn({ name: "RoomID" })
    Room:Room;

  
}