export default class Singleton {
  public static _instance: null | typeof this = null;
  static get className() {
    return this.name;
  }

  static getInstance<T>(...bindings: any[]) {
    if (!this._instance) {
      console.debug("Init class " + this.name);
      this._instance = new (this as any)(...bindings) as any;
    }

    return this._instance as T;
  }
}
