import { ValidationException } from "../exception/ValidationException"

export class CreateTaskDto {
  constructor(
    public readonly task: string,
    public readonly description: string
  ) {}

  static from(body: Partial<CreateTaskDto>) {
    if (!body.task) {
      throw new ValidationException("missing field task")
    }

    if (!body.description) {
      throw new ValidationException("missing field description")
    }

    return new CreateTaskDto(body.task, body.description)
  }
}
