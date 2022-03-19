import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm"

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({ name: "task", length: 60 })
  public task: string

  @Column({ name: "description", length: 100 })
  public description: string

  @Column({ name: "is_completed", default: false })
  public isCompleted: boolean

  @CreateDateColumn()
  public createdAt: Date

  @UpdateDateColumn()
  public updatedAt: Date
}
