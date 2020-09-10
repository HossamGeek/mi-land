import { SingerAlbum } from './singer-album/singer-album.entity';
import { Entity, OneToMany } from 'typeorm';
import { Artist } from 'src/commons/classes/artist.abstract';
@Entity('singer')
export class Singer extends Artist {
  @OneToMany(
    type => SingerAlbum,
    singerAlbum => singerAlbum.singer,
    {
      eager: true,
    },
  )
  singerAlbums: SingerAlbum[];
}
