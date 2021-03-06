import { Favorite } from './../favorite/favorite.entity';
import { User } from './../auth/entities/user.entity';
import { Gender } from './../../commons/enum/gender';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';
@Entity('profile')
@Unique(['phone', 'username'])
export class Profile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;
  @Column()
  lastname: string;

  @Column()
  username: string;

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

  @OneToOne(
    type => Favorite,
    favorite => favorite.profile,
  )
  @JoinColumn()
  favorite: Favorite;

  @Column()
  favoriteId: number;
}
