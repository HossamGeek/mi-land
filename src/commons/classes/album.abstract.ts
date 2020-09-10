import { BaseEntity, Unique, PrimaryGeneratedColumn, Column } from 'typeorm';
@Unique(['name'])
export abstract class Album extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;
}
