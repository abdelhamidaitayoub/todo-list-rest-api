import "dotenv/config"
import "reflect-metadata"
import { Container } from "inversify"
import { InversifyExpressServer } from "inversify-express-utils"
import express from "express"
import "./controller/hi.controller"

console.clear()

export async function bootstrap() {
  const container = new Container()
  const server = new InversifyExpressServer(container)

  server.setConfig((app) => {
    app.use(express.json())
  })

  const app = server.build()

  app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`)
  })
}

bootstrap()
