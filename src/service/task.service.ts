import { TaskRepository } from "@repository/task.repository"
import { injectable } from "inversify"
import { CreateTaskDto } from "../dto/create-task.dto"
import { DatabaseService } from "./database.service"

@injectable()
export class TaskService {
  constructor(private readonly dbService: DatabaseService) {}

  public async listAll() {
    const repository = await this.dbService.getRepository(TaskRepository)
    return await repository.find()
  }

  public async get(id: number) {
    const repository = await this.dbService.getRepository(TaskRepository)
    return await repository.findOne(id)
  }

  public async create(task: any) {
    const repository = await this.dbService.getRepository(TaskRepository)
    return await repository.save(task)
  }

  public async update(id: number, task: Partial<CreateTaskDto>) {
    const repository = await this.dbService.getRepository(TaskRepository)
    return await repository.update(id, task)
  }

  public async delete(id: number) {
    const repository = await this.dbService.getRepository(TaskRepository)
    return await repository.delete(id)
  }
}
