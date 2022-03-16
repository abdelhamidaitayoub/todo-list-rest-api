import { injectable } from "inversify"
import { Connection, createConnection, ObjectType } from "typeorm"

@injectable()
export class DatabaseService {
  private static connection: Connection

  public async getConnection(): Promise<Connection> {
    if (DatabaseService.connection instanceof Connection) {
      return DatabaseService.connection
    }

    try {
      DatabaseService.connection = await createConnection()
      console.log("Connection established")
      return DatabaseService.connection
    } catch (e) {
      console.log("Cannot establish database connection")
      process.exit(1)
    }
  }

  public async getRepository<T>(repository: ObjectType<T>): Promise<T> {
    const connection = await this.getConnection()
    return await connection.getCustomRepository<T>(repository)
  }
}
