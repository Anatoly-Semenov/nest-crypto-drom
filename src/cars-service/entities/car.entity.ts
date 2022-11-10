import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Brand } from './brand.entity';
import { Model } from './model.entity';
import { Color } from './color.entity';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Brand, (brand) => brand.id)
  @JoinColumn({ name: 'brand_id' })
  brand: number;

  @Column()
  brand_id: number;

  @ManyToOne(() => Model, (model) => model.id)
  @JoinColumn({ name: 'model_id' })
  model: number;

  @Column()
  model_id: number;

  @ManyToOne(() => Color, (color) => color.id)
  @JoinColumn({ name: 'color_id' })
  color: number;

  @Column()
  color_id: number;

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
