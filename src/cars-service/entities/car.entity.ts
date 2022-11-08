import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToMany,
} from 'typeorm';

import { Brand } from './brand.entity';
import { Model } from './model.entity';
import { Color } from './color.entity';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ManyToMany(() => Brand, (brand) => brand.id)
  brand_id: number;

  @Column()
  @ManyToMany(() => Model, (brand) => brand.id)
  model_id: number;

  @Column()
  year: number;

  @Column()
  hp: number;

  @Column()
  @ManyToMany(() => Color, (color) => color.id)
  color_id: number;

  @Column({ nullable: true })
  price_rub: number;

  @Column()
  img_preview: string;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;
}
