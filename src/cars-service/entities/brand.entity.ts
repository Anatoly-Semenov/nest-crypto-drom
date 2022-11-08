import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @UpdateDateColumn()
  updated_at?: Date;

  @CreateDateColumn()
  created_at?: Date;
}
