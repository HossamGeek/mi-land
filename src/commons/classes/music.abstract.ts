import { BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

export abstract class MusicParent extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  source: string;

  @Column()
  description: string;

  @Column()
  artist: string;

  @Column()
  rate: number;

  @Column()
  publishedIn: Date;

  @Column()
  tempImage: string;
}
