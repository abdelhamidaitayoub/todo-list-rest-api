import {
  controller,
  httpDelete,
  httpGet,
  httpPost,
  httpPut,
  requestBody,
  requestParam,
} from "inversify-express-utils"
import { CreateTaskDto } from "src/dto/create-task.dto"
import { TaskService } from "src/service/task.service"

// TODO: Validation (validate fields)
@controller("/api/tasks")
export class TaskController {
  constructor(private readonly taskservice: TaskService) {}

  @httpGet("/")
  async getAllTasks() {
    return await this.taskservice.listAll()
  }

  @httpGet("/:id")
  async getTask(@requestParam("id") id: number) {
    return await this.taskservice.get(id)
  }

  @httpPost("/")
  async createTask(@requestBody() createTaskDto: CreateTaskDto) {
    return await this.taskservice.create(createTaskDto)
  }

  // TODO: Return updated task
  @httpPut("/:id")
  async updateTask(
    @requestParam("id") id: number,
    @requestBody() createTaskDto: CreateTaskDto
  ) {
    return await this.taskservice.update(id, createTaskDto)
  }

  // TODO: return 204 (NO_CONTENT) http status
  @httpDelete("/:id")
  async deleteTask(@requestParam("id") id: number) {
    return await this.taskservice.delete(id)
  }
}
