import { Container } from "inversify"
import { DatabaseService } from "@service/database.service"
import { TaskService } from "@service/task.service"

export const container = new Container()
container.bind(TaskService).toSelf()
container.bind(DatabaseService).toSelf()
