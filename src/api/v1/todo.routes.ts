import { Router } from "express";
import addTodo from "../../controllers/todos/addTodo";
import allTodos from "../../controllers/todos/allTodos";
import deleteTodoById from "../../controllers/todos/deleteTodoById";
import updateIsCompleted from "../../controllers/todos/updateIsCompleted";
import updateTodoById from "../../controllers/todos/updateTodoById";


const router = Router()



router.get('/', allTodos)

router.post('/', addTodo)

router.put('/:id', updateTodoById )

router.patch('/:id', updateIsCompleted)

router.delete('/:id', deleteTodoById)




export default router