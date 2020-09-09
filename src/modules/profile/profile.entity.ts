import { User } from './../auth/entities/user.entity';
import { Gender } from './../../commons/enum/gender';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToOne,
} from 'typeorm';
@Entity('profile')
@Unique(['phone'])
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;
  @Column()
  lastname: string;

  @Column()
  age: number;

  @Column()
  address: string;

  @Column()
  city: string;
  @Column()
  phone: string;
  @Column()
  country: string;
  @Column()
  gender: Gender;

  @OneToOne(
    type => User,
    user => user.profile,
  )
  user: User;
}
