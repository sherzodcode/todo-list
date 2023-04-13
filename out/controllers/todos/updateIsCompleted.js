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
const account_services_1 = require("./../../services/account.services");
const todo_service_1 = require("../../services/todo.service");
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.header('authorization');
        const id = +req.params.id;
        const { isCompleted } = req.body;
        if (!token) {
            return res.status(500).json({
                message: "Shame on you, put token"
            });
        }
        const account = yield (0, account_services_1.findByToken)(token);
        if (!account) {
            return res.status(500).json({
                message: "Shame on you, There's no acc with this token"
            });
        }
        const updatedTodo = yield (0, todo_service_1.changeStatus)(id, isCompleted);
        return res.status(200).json({
            id: updatedTodo.id,
            title: updatedTodo.title,
            isCompleted: updatedTodo.isCompleted
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Error in updating is complete"
        });
    }
});
