import HttpException from "./HttpException"

export class ValidationException extends HttpException {
  constructor(msg: string, statusCode?: number) {
    super(msg, !!statusCode ? statusCode : 400)
  }
}
