import "reflect-metadata"
import { server } from "./core/server"

// console.clear()

export async function bootstrap() {
  server.build().listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`)
  })
}

bootstrap()
