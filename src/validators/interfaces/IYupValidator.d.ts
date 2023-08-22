import { Request } from "express";
import { Schema } from "yup";

export default interface IYupValidator {
  rules: (req: Request) => Schema;

  getErrorMessages: (error: any) => { [k: string]: string };
}
