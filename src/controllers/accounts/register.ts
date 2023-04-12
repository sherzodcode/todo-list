import {Request, Response } from "express"
import { addAccount } from "../../services/account.services"
import { accountDto } from "../../models/account.dto"

export default async(req: Request, res: Response) => {
    try{
        const account: accountDto = req.body

        const newAccount = await addAccount(account)

        return res.status(200).json({
            id: newAccount.id,
            name: newAccount.name,
            username: newAccount.username,
            token: newAccount.token
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Error in register"
        })
    }
}

