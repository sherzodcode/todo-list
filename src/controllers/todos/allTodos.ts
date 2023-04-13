import {Request , Response } from "express"
import { allTodos } from "../../services/todo.service"
import { findByToken } from "../../services/account.services"

export default async(req: Request, res: Response) => {
    try{
        const token = req.header('authorization')

        if(!token){
            return res.status(500).json({
                message: "Shame on you, put token"
            })
        }

        const account = await findByToken(token)

        if(!account){
            return res.status(500).json({
                message: "Shame on you, there's no acc with this token"
            })
        }

        const todos = await(allTodos(account.id))

        const mapped = todos.map(todo => {
            return {
                id: todo.id,
                title: todo.title,
                isCompleted: todo.isCompleted
            }
        })

        return res.status(200).json({
            mapped
        })

    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Error in All todos",
            err
        })
    }
}