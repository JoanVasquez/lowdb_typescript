import { injectable } from "tsyringe";
import { ITodo } from "../models/db.data";
import TodoRepository from "../repositories/todo.repository";
import BaseService from "./base.service";

@injectable()
export default class TodoService extends BaseService<ITodo> {
  constructor(todoRepository: TodoRepository) {
    super(todoRepository);
  }
}
