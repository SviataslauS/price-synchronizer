import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Rate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  currency: string; //  it's better to use here currencyId as secandary key to Currency table (id, name)

  @Column()
  price: string;

  @CreateDateColumn()
  date: Date;
}
