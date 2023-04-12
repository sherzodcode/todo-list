import {Request , Response } from "express"
import { deleteAccount, findByToken } from "../../services/account.services"

export default async(req: Request, res: Response) => {
    try{
        const token = req.header('authorization')

        const oldUser = await findByToken(token)
        
        if(!oldUser){
            return res.status(500).json({
                message: "there's no user with this token"
            })
        }

        const deletedAccount = await deleteAccount(token) 
        
        return res.status(200).json({
            message: "Account and todos has been deleted",
            todo: oldUser.todo
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Error in Deleting account",
            err
        })
    }
}




