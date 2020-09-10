import { Singer } from '../singer.entity';
import { Entity, ManyToOne, Column, OneToMany } from 'typeorm';
import { Album } from './../../../commons/classes/album.abstract';
import { Song } from '../song/song.entity';
@Entity('singer-album')
export class SingerAlbum extends Album {
  @ManyToOne(
    type => Singer,
    singer => singer.singerAlbums,
    {
      eager: false,
    },
  )
  singer: Singer;
  @Column()
  singerId: number;

  @OneToMany(
    type => Song,
    song => song.singerAlbum,
    {
      eager: true,
    },
  )
  songs: Song;
}
