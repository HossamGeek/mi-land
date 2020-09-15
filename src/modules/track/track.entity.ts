import { Song } from './../singer/song/song.entity';
import { Music } from './../musician/music/music.entity';
import { Favorite } from './../favorite/favorite.entity';
import { Playlist } from './../playlist/playlist.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  Generated,
} from 'typeorm';
@Entity('track')
export class Track extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  link: string;

  @Generated()
  @Column()
  index: number;

  @ManyToOne(
    type => Playlist,
    playlist => playlist.tracks,
    { eager: false },
  )
  playlist: Playlist;

  @ManyToOne(
    type => Favorite,
    favorite => favorite.tracks,
    { eager: false },
  )
  favorite: Favorite;

  @ManyToOne(
    type => Music,
    music => music.tracks,
    { eager: false },
  )
  music: Music;

  @ManyToOne(
    type => Song,
    song => song.tracks,
    { eager: false },
  )
  song: Song;

  @Column()
  playlistId: number;
  @Column()
  favoriteId: number;
  @Column()
  musicId: number;
  @Column()
  songId: number;
}
