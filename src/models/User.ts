import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Exclude } from "class-transformer";

@Entity("users")
export class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Exclude()
  @Column()
  email: string;

  @Exclude()
  @Column()
  admin: boolean;

  @Exclude()
  @Column()
  password: string;

  @Exclude()
  @CreateDateColumn()
  create_at: Date;

  @Exclude()
  @UpdateDateColumn()
  update_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
