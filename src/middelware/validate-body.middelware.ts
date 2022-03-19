import { Request, Response, NextFunction } from "express"
import { BaseMeddleWare } from "./Base.middleware"

export class ValidateBodyMiddelware extends BaseMeddleWare {
  constructor(private readonly _dtoClasss: { from: any }) {
    super()
  }

  public handler(
    req: Request,
    res: Response,
    next: NextFunction
  ): void | Promise<void> {
    req.body = this._dtoClasss.from(req.body)
    next()
  }

  static with(dto: any) {
    return new ValidateBodyMiddelware(dto).handler
  }
}
