import { todoDto } from './../models/todo.dto';
import { PrismaClient } from ".prisma/client";


const prisma = new PrismaClient()



export const allTodos = async(accountId: number) => {
    return prisma.todo.findMany({
        where: {
            accountId
        }
    })
}


export const addTodo = async(title: string, accountId: number) => {
    return prisma.todo.create({
        data: {
            title: title,
            isCompleted: false,
            account: {
                connect: {
                    id: accountId
                }
            }
        }
    })
}


export const updateTodo = async(title: string, id: number) => {
    return prisma.todo.update({
        data: {
            title
        }, where: {
            id
        }
    })
}                                                                   


export const changeStatus = async(id: number, isCompleted: boolean) => {
    return prisma.todo.update({
        data: {
            isCompleted
        }, where: {
            id
        }
    })
}


export const deleteTodo = async(id: number) => {
    return prisma.todo.delete({
        where: {
            id
        }
    })
}



