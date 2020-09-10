import { Songlang } from './../../../commons/enum/song-language';
import { SongEnum } from './../../../commons/enum/song';
import { Entity, ManyToOne, Column } from 'typeorm';
import { MusicParent } from './../../../commons/classes/music.abstract';
import { SingerAlbum } from '../singer-album/singer-album.entity';
@Entity('song')
export class Song extends MusicParent {
  @Column({
    type: 'enum',
    enum: SongEnum,
    array: false,
  })
  type: SongEnum;
  @Column({
    type: 'enum',
    enum: Songlang,
    array: false,
  })
  songLang: Songlang;

  @ManyToOne(
    type => SingerAlbum,
    singerAlbum => singerAlbum.songs,
  )
  singerAlbum: SingerAlbum;

  @Column()
  albumId: number;
}
