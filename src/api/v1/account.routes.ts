import { Router } from "express";

const router = Router()

import register from "../../controllers/accounts/register";
import deleteAcc from '../../controllers/accounts/deleteAcc'

router.post('/', register)

router.delete('/', deleteAcc )



export default router