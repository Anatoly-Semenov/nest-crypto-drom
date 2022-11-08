import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';

import { Brand } from './brand.entity';

@Entity()
export class Model {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  @ManyToOne(() => Brand, (brand) => brand.id)
  brand_id: number;

  @UpdateDateColumn()
  updated_at?: Date;

  @CreateDateColumn()
  created_at?: Date;
}
