import HttpException from "./HttpException"

export class NotFoundException extends HttpException {
  constructor(msg: string, statusCode?: number) {
    super(msg, !!statusCode ? statusCode : 404)
  }
}
