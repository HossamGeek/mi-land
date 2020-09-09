import { Gender } from './../../commons/enum/gender';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('singer')
export class Singer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  info: string;

  @Column()
  image: string;

  @Column()
  type: string;

  @Column()
  gender: Gender;
}
