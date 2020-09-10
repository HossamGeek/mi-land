import { ArtistType } from './../enum/artist-type';
import { Gender } from './../enum/gender';
import { BaseEntity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
@Unique(['name'])
export abstract class Artist extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  info: string;

  @Column()
  image: string;

  @Column({
    type: 'enum',
    enum: ArtistType,
    array: false,
  })
  type: ArtistType;

  @Column()
  gender: Gender;

  @Column()
  nationality: string;
}
