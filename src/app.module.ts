import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { config } from './config';
import { ProfileModule } from './modules/profile/profile.module';
import { SingerModule } from './modules/singer/singer.module';
import { MusicianModule } from './modules/musician/musician.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(config.db as TypeOrmModuleOptions),
    AuthModule,
    ProfileModule,
    SingerModule,
    MusicianModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
