import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  hp: number;

  @Column()
  color: string;

  @Column({ nullable: true })
  price_rub: number;

  @Column()
  img_preview: string;

  @UpdateDateColumn()
  updatedAt?: Date;

  @CreateDateColumn()
  createdAt?: Date;
}
