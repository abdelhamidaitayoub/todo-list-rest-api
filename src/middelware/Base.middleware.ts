import { NextFunction } from "express"

export abstract class BaseMeddleWare {
  constructor() {
    this.handler = this.handler.bind(this)
  }
  public abstract handler(
    req: Request,
    res: Response,
    next: NextFunction
  ): void | Promise<void>
}
