import { injectable } from "inversify"
import { CreateTaskDto } from "src/dto/create-task.dto"
import { TaskRepository } from "@repository/task.repository"
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

  // TODO: How i use DTO to get the data from the user ?
  public async create(task: CreateTaskDto) {
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
