import express, { NextFunction } from "express"
import { InversifyExpressServer } from "inversify-express-utils"
import { container } from "./container.core"
import "@controller/task.controller"
import HttpException from "../exception/HttpException"

export const server = new InversifyExpressServer(container)

server.setConfig((app) => {
  app.use(express.json())
})

server.setErrorConfig((app) => {
  // @ts-ignore
  app.use((err, _req: Request, res: Response, next: NextFunction) => {
    if (err instanceof HttpException) {
      // @ts-ignore
      return res.status(err.statusCode).json({
        status: err.statusCode,
        message: err.message,
      })
    }

    next()
  })
})
