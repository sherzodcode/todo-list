import { Router } from "express";
import accountRoutes from './account.routes'
import todoRoutes from './todo.routes'

const router = Router()

router.use('/account', accountRoutes)
router.use('/todos', todoRoutes)

export default router