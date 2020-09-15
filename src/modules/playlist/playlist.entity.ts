import { Track } from './../track/track.entity';
import { User } from './../auth/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  OneToMany,
} from 'typeorm';
@Entity('playlist')
export class Playlist extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  createdAt: Date;

  @ManyToOne(
    type => User,
    user => user.playlists,
    { eager: false },
  )
  user: User;

  @OneToMany(
    type => Track,
    track => track.playlist,
    { eager: true },
  )
  tracks: Track[];

  @Column()
  userId: number;
}
