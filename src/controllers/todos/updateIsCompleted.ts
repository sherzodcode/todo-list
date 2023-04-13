import { findByToken } from './../../services/account.services';
import {Request , Response } from "express"
import { changeStatus } from "../../services/todo.service"


export default async (req: Request, res: Response) => {
    try{
        const token = req.header('authorization')
        const id = +req.params.id
        const {isCompleted} = req.body

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

        const updatedTodo = await changeStatus(id, isCompleted)

        return res.status(200).json({
            id: updatedTodo.id,
            title: updatedTodo.title,
            isCompleted: updatedTodo.isCompleted
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Error in updating is complete"
        })
    }
}