import { Router } from "express";
import addTodo from "../../controllers/todos/addTodo";
import allTodos from "../../controllers/todos/allTodos";

const router = Router()

router.get('/', allTodos)

router.post('/', addTodo)



export default router