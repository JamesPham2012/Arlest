import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("UserTable")
export class User {
  @PrimaryGeneratedColumn()
  UserID: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  passport: string;
}