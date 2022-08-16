import {
  Entity,
  Index,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  name: string;

  @Column({
    nullable: false,
    default: '',
  })
  @Index({ unique: true })
  username: string;

  @Column({
    name: 'email_address',
    nullable: false,
    default: '',
  })
  emailAddress: string;

  @Column({
    nullable: false,
    default: '',
  })
  password: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
  })
  updatedAt: Date;

  @Column({
    name: 'is_active',
    nullable: false,
    default: true,
  })
  isActive: boolean;
}
