import { Playlist } from './playlist.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Playlist])],
})
export class PlaylistModule {}
