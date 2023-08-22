import RoleRepository from "../repositories/RoleRepository";
import IRoleRepository from "../repositories/interfaces/IRoleRepostiory";
import RoleService from "../services/RoleService";
import IRoleSerice from "../services/interfaces/IRoleService";
import BaseController from "./BaseController";
import ITodoController from "./interfaces/ITodoController";
import { Express } from "express";
import CreateRoleValidator from "../validators/CreateRoleValidator";

export default class TodoController
  extends BaseController
  implements ITodoController
{
  constructor(app: Express) {
    super(app);

    this.get("index", this.index);
    this.get("all", this.all);
    this.get("count", this.count);

    this.post("", this.create, CreateRoleValidator.getInstance());
  }

  getPrefixRoute = () => {
    return "user";
  };

  index: ITodoController["index"] = (req, res) => {
    res.send("Here is index route of user controller");
  };

  all: ITodoController["all"] = async (req, res) => {
    // const baseService = new TodoService(new UserRepo());

    // const allRepo = await baseService.all();

    res.json([]);
  };

  count: ITodoController["count"] = async (req, res) => {
    const repository = RoleRepository.getInstance<IRoleRepository>();
    const userService = RoleService.getInstance<IRoleSerice>(repository);

    console.log(await userService.find("1"));

    res.json(1);
  };

  create: ITodoController["create"] = async (req, res) => {
    const repository = RoleRepository.getInstance<IRoleRepository>();
    const userService = RoleService.getInstance<IRoleSerice>(repository);

    console.log(await userService.create(req.body));

    res.json(1);
  };
}
