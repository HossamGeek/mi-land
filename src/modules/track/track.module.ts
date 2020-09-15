import { Track } from './track.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Track])],
})
export class TrackModule {}
