import { Playlist } from './../../playlist/playlist.entity';
import { Profile } from './../../profile/profile.entity';
import { Auth } from '../../../commons/classes/auth.class';
import { Role } from './../../../commons/enum/role';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import * as bcrybt from 'bcryptjs';
import { type } from 'os';
@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  password: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  createdAt: Date;

  @Column({ type: 'enum', enum: Role, array: true })
  role: Role[];

  @Column()
  salt: string;

  @Column('simple-json')
  auth: Auth;

  async validationPassword(password: string): Promise<boolean> {
    const hash = await bcrybt.hash(password, this.salt);
    return hash == this.password;
  }

  @OneToOne(
    type => Profile,
    profile => profile.user,
  )
  @JoinColumn()
  profile: Profile;

  @Column()
  profileId: number;

  @OneToMany(
    type => Playlist,
    playlist => playlist.user,
    {
      eager: true,
    },
  )
  playlists: Playlist[];
}
