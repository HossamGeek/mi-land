import { MusicianAlbum } from './musician-album/musician-album.entity';
import { Entity, OneToMany } from 'typeorm';
import { Artist } from 'src/commons/classes/artist.abstract';
@Entity('musician')
export class Musician extends Artist {
  @OneToMany(
    type => MusicianAlbum,
    musicianAlbum => musicianAlbum.musician,
    {
      eager: true,
    },
  )
  musicianAlbums: MusicianAlbum[];
}
