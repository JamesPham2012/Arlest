import { Entity, Column, PrimaryGeneratedColumn, OneToMany, PrimaryColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Room } from './Room';
import { UserEntity } from './UserEntity';
@Entity()
export class BookingOrder {
    @ManyToOne(type => UserEntity, { primary: true })
    @JoinColumn({ name: "UserID" })
    User: UserEntity;

    @OneToOne(type => Room, { primary: true })
    @JoinColumn({ name: "RoomID" })
    Room:Room;

  
}