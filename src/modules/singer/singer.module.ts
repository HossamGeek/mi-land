import { Singer } from './singer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SongModule } from './song/song.module';
import { SingerAlbumModule } from './singer-album/singer-album.module';

@Module({
  imports: [TypeOrmModule.forFeature([Singer]), SongModule, SingerAlbumModule],
})
export class SingerModule {}
