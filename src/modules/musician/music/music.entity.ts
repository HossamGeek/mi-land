import { MusicParent } from 'src/commons/classes/music.abstract';
import { MusicEnum } from './../../../commons/enum/music';
import { Entity, ManyToOne, Column } from 'typeorm';
import { MusicianAlbum } from '../musician-album/musician-album.entity';
@Entity('music')
export class Music extends MusicParent {
  @Column({
    type: 'enum',
    enum: MusicEnum,
    array: false,
  })
  type: MusicEnum;

  @ManyToOne(
    type => MusicianAlbum,
    musicianAlbum => musicianAlbum.musics,
  )
  musicianAlbum: MusicianAlbum;

  @Column()
  albumId: number;
}
