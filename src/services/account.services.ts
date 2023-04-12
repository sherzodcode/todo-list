import { PrismaClient } from ".prisma/client";
import { accountDto } from "../models/account.dto";
import md5 from "md5";

const prisma = new PrismaClient()

export const addAccount = async(account: accountDto) => {

    const token: string = md5(account.name + account.password) 

    return prisma.account.create({
        data: {
            name: account.name,
            username: account.username,
            password: account.password,
            token
        }, include: {
            todo: true
        }
    })
}


export const deleteAccount = async(token: string | undefined) => {
    return prisma.account.delete({
        where: {
            token: token
        }
    })
}

export const findByUsername = async(username: string) => {
    return prisma.account.findUnique({
        where: {
            username
        }
    })
}

export const findByToken = async(token: string | undefined) => {
    return prisma.account.findFirst({
        where: {
            token
        }, 
        include: {
            todo: true
        }
    })
}

