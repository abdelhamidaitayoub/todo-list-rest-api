import { Task } from "src/entity/Task"
import { EntityRepository, Repository } from "typeorm"

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {}
