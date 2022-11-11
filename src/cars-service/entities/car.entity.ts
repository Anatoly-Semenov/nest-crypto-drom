import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

// Entities
import { Color, Brand, Model } from './';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Brand, (brand) => brand.id)
  @JoinColumn({ name: 'brand_id' })
  brand: Brand;

  @Column()
  brand_id: number;

  @ManyToOne(() => Model, (model) => model.id)
  @JoinColumn({ name: 'model_id' })
  model: Model;

  @Column()
  model_id: number;

  @ManyToOne(() => Color, (color) => color.id)
  @JoinColumn({ name: 'color_id' })
  color: Color;

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
