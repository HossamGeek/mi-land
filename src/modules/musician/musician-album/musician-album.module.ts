import { MusicianAlbum } from './musician-album.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([MusicianAlbum])],
})
export class MusicianAlbumModule {}
