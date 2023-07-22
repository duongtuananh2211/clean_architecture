import { IAppAdapter } from "../adapters/IAppAdapter";
import BaseController from "./BaseController";
import ITodoController from "./interfaces/ITodoController";
import TodoService from "../services/UserService";
import UserRepo from "../repositories/UserRepo";

export default class TodoController
  extends BaseController
  implements ITodoController
{
  constructor(app: IAppAdapter) {
    super(app);

    this.get("index", this.index);
    this.get("all", this.all);
    this.get("count", this.count);
  }

  getPrefixRoute = () => {
    return "user";
  };

  index: ITodoController["index"] = (req, res) => {
    res.send("Here is index route of user controller");
  };

  all: ITodoController["all"] = async (req, res) => {
    const baseService = new TodoService(new UserRepo());

    const allRepo = await baseService.all();

    res.json(allRepo);
  };

  count: ITodoController["count"] = async (req, res) => {
    const baseService = new TodoService(new UserRepo());

    const count = await baseService.count();

    res.json(count);
  };
}
