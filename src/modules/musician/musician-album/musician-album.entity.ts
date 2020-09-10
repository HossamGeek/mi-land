import { Musician } from './../musician.entity';
import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { Album } from 'src/commons/classes/album.abstract';
import { Music } from '../music/music.entity';
@Entity('musician-album')
export class MusicianAlbum extends Album {
  @ManyToOne(
    type => Musician,
    musician => musician.musicianAlbums,
    {
      eager: false,
    },
  )
  musician: Musician;
  @Column()
  musicianId: number;

  @OneToMany(
    type => Music,
    music => music.musicianAlbum,
    {
      eager: true,
    },
  )
  musics: Music[];
}
