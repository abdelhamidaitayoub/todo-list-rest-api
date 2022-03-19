import { TaskService } from "@service/task.service"
import {
  controller,
  httpDelete,
  httpGet,
  httpPost,
  httpPut,
  requestBody,
  requestParam,
  response,
} from "inversify-express-utils"
import { CreateTaskDto } from "src/dto/create-task.dto"
import { Task } from "src/entity/Task"
import { NotFoundException } from "src/exception/NotFoundException"
import { ValidateBodyMiddelware } from "src/middelware/validate-body.middelware"

// TODO: Validation (validate fields)
@controller("/api/tasks")
export class TaskController {
  constructor(private readonly taskservice: TaskService) {}

  @httpGet("/")
  async getAllTasks(@response() res: Response) {
    const tasks = await this.taskservice.listAll()
    res.status(200).json({
      status: 200,
      data: {
        tasks,
      },
    })
  }

  @httpGet("/:id")
  async getTask(@response() res: Response, @requestParam("id") id: number) {
    const task = await this.taskservice.get(id)

    if (!task) throw new NotFoundException("this task not existe")

    res.status(200).json({
      status: 200,
      data: {
        task,
      },
    })
  }

  @httpPost("/", ValidateBodyMiddelware.with(CreateTaskDto))
  async createTask(
    @response() res: Response,
    @requestBody() body: Partial<Task>
  ) {
    const task = await this.taskservice.create(body)
    res.status(201).json({
      status: 201,
      data: {
        task,
      },
    })
  }

  @httpPut("/:id")
  async updateTask(
    @response() res: Response,
    @requestParam("id") id: number,
    @requestBody() createTaskDto: CreateTaskDto
  ) {
    const updated = await this.taskservice.update(id, createTaskDto)
    if (updated.affected == 0)
      throw new NotFoundException("this task not existe")

    res.status(200).json({
      status: 200,
      data: {
        task: updated,
      },
    })
  }

  @httpDelete("/:id")
  async deleteTask(@response() res: Response, @requestParam("id") id: number) {
    const deleted = await this.taskservice.delete(id)
    if (deleted.affected == 0)
      throw new NotFoundException("this task not existe")

    res.status(204).json({})
  }
}
