import express from "express"
import { InversifyExpressServer } from "inversify-express-utils"
import { container } from "./container.core"
import "@controller/task.controller"

export const server = new InversifyExpressServer(container)

server.setConfig((app) => {
  app.use(express.json())
})
