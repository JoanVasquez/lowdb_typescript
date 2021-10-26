import { autoInjectable, inject } from "tsyringe";
import IService from "../interfaces/service.interface";
import { ITodo } from "../models/db.data";
import BaseController from "./base.controller";

@autoInjectable()
export default class TodoController extends BaseController {
  constructor(@inject("IService") iService: IService<ITodo>) {
    super(iService!);
  }
}
