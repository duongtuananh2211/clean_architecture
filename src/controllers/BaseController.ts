import { IAppAdapter } from "../adapters/IAppAdapter";
import { IBaseController } from "./interfaces/IBaseController";

export default abstract class BaseController implements IBaseController {
  app: IAppAdapter | undefined;
  prefixRoute: string | undefined;
  constructor(app: IAppAdapter) {
    this.setApp(app);
  }

  setApp = (app: IAppAdapter) => {
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

  get: IBaseController["get"] = (path, handler) => {
    const fullPath = `/${this.getPrefixRoute()}/${path}`;

    console.debug("path", fullPath);

    this.getApp().get(fullPath, handler);
  };

  post: IBaseController["post"] = (path, handler) => {
    const fullPath = `/${this.getPrefixRoute()}/${path}`;

    console.debug("path", fullPath);

    this.getApp().post(fullPath, handler);
  };
}
