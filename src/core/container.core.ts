import { Container } from "inversify"
import { DatabaseService } from "src/service/database.service"
import { TaskService } from "src/service/task.service"

export const container = new Container()
container.bind(TaskService).toSelf()
container.bind(DatabaseService).toSelf()
