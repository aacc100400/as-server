import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne
} from 'typeorm';
import { User } from './User';

@Entity('user_profile', { synchronize: true })
export class UserProfile extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar', { nullable: true, length: 255 })
  thumbnail!: string;

  @Column('varchar', { nullable: true, length: 255 })
  mobile!: string;

  @Column('text', { nullable: true })
  about!: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt!: Date;

  @OneToOne(() => User, user => user.userprofiles)
  user!: User;
}
