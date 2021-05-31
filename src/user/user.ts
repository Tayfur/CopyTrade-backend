import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Length, IsEmail } from 'class-validator';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid') //Tell Postgre to generate a Unique Key for this column
  id: string; //Name of the column is id and type is string
  @Column('text')
  name: string;
  @Column('text')
  @Length(5, 100)
  @IsEmail()
  email: string;
  @Column('text')
  Password: string;
  @Column({ nullable: false, default: false })
  subs: boolean;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
