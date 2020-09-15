import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { config } from './config';
import { ProfileModule } from './modules/profile/profile.module';
import { SingerModule } from './modules/singer/singer.module';
import { MusicianModule } from './modules/musician/musician.module';
import { FavoriteModule } from './modules/favorite/favorite.module';
import { PlaylistModule } from './modules/playlist/playlist.module';
import { TrackModule } from './modules/track/track.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(config.db as TypeOrmModuleOptions),
    AuthModule,
    ProfileModule,
    SingerModule,
    MusicianModule,
    FavoriteModule,
    PlaylistModule,
    TrackModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
