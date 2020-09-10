import { MusicianAlbumModule } from './musician-album/musician-album.module';
import { Musician } from './musician.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { MusicModule } from './music/music.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Musician]),
    MusicModule,
    MusicianAlbumModule,
  ],
})
export class MusicianModule {}
