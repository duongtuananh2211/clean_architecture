import { Model } from "objection";

export default interface IObjectionModelConnector {
  getModel: () => typeof Model;
}
