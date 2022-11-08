import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';

import { Brand } from './brand.entity';
import { Model } from './model.entity';
import { Color } from './color.entity';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Brand, (brand) => brand.id)
  brand: number;

  @ManyToOne(() => Model, (model) => model.id)
  model: number;

  @ManyToOne(() => Color, (color) => color.id)
  color: number;

  @Column()
  year: number;

  @Column()
  hp: number;

  @Column({ nullable: true })
  price_rub: number;

  @Column()
  img_preview: string;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;
}
