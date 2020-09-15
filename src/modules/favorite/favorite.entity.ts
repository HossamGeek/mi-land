import { Track } from './../track/track.entity';
import { Profile } from './../profile/profile.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  BaseEntity,
  OneToMany,
} from 'typeorm';
@Entity('favorite-list')
export class Favorite extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(
    type => Profile,
    profile => profile.favorite,
  )
  profile: Profile;

  @OneToMany(
    type => Track,
    track => track.favorite,
    { eager: true },
  )
  tracks: Track[];
}
