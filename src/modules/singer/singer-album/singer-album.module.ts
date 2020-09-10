import { SingerAlbum } from './singer-album.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([SingerAlbum])],
})
export class SingerAlbumModule {}
