import express, { Router } from "express";
import { container } from "tsyringe";
import TodoController from "../controllers/todo.controller";
import { validateRequest } from "../middlewares/exception.middleware";
import TodoService from "../services/todo.service";
import createOrUpdate from "../validations/todo.validations";

const router: Router = express.Router();
container.register("IService", { useClass: TodoService });
const todoController = container.resolve(TodoController);

router.get("/todos", todoController.findAll);
router.get("/todos/:id", todoController.findById);
router.post("/todos", createOrUpdate, validateRequest, todoController.save);
router.put(
  "/todos/:id",
  createOrUpdate,
  validateRequest,
  todoController.update
);
router.delete("/todos/:id", todoController.delete);

export default router;
