import { controller, httpGet } from "inversify-express-utils"

@controller("/hi")
export class HiController {
  @httpGet("/")
  public greeting() {
    return "Hi 👋"
  }
}
