import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'members' })
export class Member extends Model {
  @Column({ type: DataType.STRING })
  firstName!: string;

  @Column({ type: DataType.STRING })
  lastName!: string;

  @Column({ type: DataType.STRING })
  email?: string;

  @Column({ type: DataType.STRING })
  phone?: string;

  @Column({ type: DataType.STRING })
  role?: string; // elder, servant, pioneer, etc.

  @Column({ type: DataType.STRING })
  status?: string; // active, irregular, etc.
}
