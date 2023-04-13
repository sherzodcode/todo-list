"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.changeStatus = exports.updateTodo = exports.addTodo = exports.allTodos = void 0;
const client_1 = require(".prisma/client");
const prisma = new client_1.PrismaClient();
const allTodos = (accountId) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.todo.findMany({
        where: {
            accountId
        }
    });
});
exports.allTodos = allTodos;
const addTodo = (title, accountId) => __awaiter(void 0, void 0, void 0, function* () {
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
    });
});
exports.addTodo = addTodo;
const updateTodo = (title, id) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.todo.update({
        data: {
            title
        }, where: {
            id
        }
    });
});
exports.updateTodo = updateTodo;
const changeStatus = (id, isCompleted) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.todo.update({
        data: {
            isCompleted
        }, where: {
            id
        }
    });
});
exports.changeStatus = changeStatus;
const deleteTodo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.todo.delete({
        where: {
            id
        }
    });
});
exports.deleteTodo = deleteTodo;
