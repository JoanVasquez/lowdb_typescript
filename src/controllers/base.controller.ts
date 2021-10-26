import { Request, Response } from "express";
import IService from "../interfaces/service.interface";
import { ITodo } from "../models/db.data";

export default class BaseController {
  constructor(private baseService: IService<any>) {}

  save = (req: Request, res: Response) => {
    const data: ITodo = req.body;
    this.baseService
      .save(data)
      .then((newTodo) => res.status(201).send(newTodo));
  };

  update = (req: Request, res: Response) => {
    const id: string = req.params.id;
    const data: ITodo = req.body;
    this.baseService
      .update(id, data)
      .then((updatedTodo) => res.status(200).send(updatedTodo));
  };

  delete = (req: Request, res: Response) => {
    const id: string = req.params.id;
    this.baseService.delete(id).then((result) => res.status(200).send(result));
  };

  findById = (req: Request, res: Response) => {
    const id: string = req.params.id;
    this.baseService.findById(id).then((todo: ITodo) => res.send(todo));
  };

  findAll = (req: Request, res: Response) => {
    this.baseService.findAll().then((todos: Array<ITodo>) => res.send(todos));
  };
}
