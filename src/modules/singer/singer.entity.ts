import { Gender } from './../../commons/enum/gender';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToOne,
} from 'typeorm';
@Entity('singer')
export class Singer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  info: string;

  @Column()
  image: string;

  @Column()
  type: string;

  @Column()
  gender: Gender;

  @OneToOne(
    type => User,
    user => user.profile,
  )
  user: User;
}
