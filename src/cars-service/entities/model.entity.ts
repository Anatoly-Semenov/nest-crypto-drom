import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { Brand } from './brand.entity';
import { Car } from './car.entity';

@Entity()
export class Model {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Brand, (brand) => brand.model, { onDelete: 'CASCADE' })
  brand: Brand;

  @OneToMany(() => Car, (car) => car.model)
  cars: Car[];

  @UpdateDateColumn()
  updated_at?: Date;

  @CreateDateColumn()
  created_at?: Date;
}
