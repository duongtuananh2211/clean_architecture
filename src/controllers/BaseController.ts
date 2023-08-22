import { IBaseController } from "./interfaces/IBaseController";
import { Express } from "express";

export default abstract class BaseController implements IBaseController {
  app: Express | undefined;
  prefixRoute: string | undefined;
  constructor(app: Express) {
    this.setApp(app);
  }

  setApp = (app: Express) => {
    this.app = app;
  };

  getApp = () => {
    if (!this.app) throw Error("App is not initialized!");

    return this.app;
  };

  abstract getPrefixRoute: () => string;

  setPrefixRoute = () => {
    this.prefixRoute = this.getPrefixRoute();
  };

  get: IBaseController["get"] = (path, handler, ...middlewares) => {
    const fullPath = `/${this.getPrefixRoute()}/${path}`;

    console.debug("path", fullPath);

    this.getApp().get(
      fullPath,
      ...middlewares.map((middleware) => middleware.handler),
      handler
    );
  };

  post: IBaseController["post"] = (path, handler, ...middlewares) => {
    const fullPath = `/${this.getPrefixRoute()}/${path}`;

    console.debug("path", fullPath);

    this.getApp().post(
      fullPath,
      ...middlewares.map((middleware) => middleware.handler),
      handler
    );
  };
}
