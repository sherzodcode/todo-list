import { findByToken } from '../../services/account.services';
import {Request , Response } from "express"
import { deleteTodo } from '../../services/todo.service';

export default async(req: Request, res: Response) => {
    try{
        const token = req.header('authorization')
        const id = +req.params.id

        if(!token){
            return res.status(500).json({
                message: "Shame on you, put token"
            })
        }

        const account = await findByToken(token)

        if(!account){
            return res.status(500).json({
                message: "Shame on you, There's no acc with this token"
            })
        }

        const deletedTodo = await deleteTodo(id)

        return res.status(200).json({
            id: deletedTodo.id,
            title: deletedTodo.title,
            isCompleted: deletedTodo.isCompleted
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "error in deleting todo"
        })
    }
}