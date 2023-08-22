export default class ValidationError extends Error {
  name = "validation-error";

  data = {};

  constructor(data: any) {
    super();
    this.data = data;
  }
}
