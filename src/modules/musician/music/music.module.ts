import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Music } from './music.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Music])],
})
export class MusicModule {}
