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
const todo_service_1 = require("../../services/todo.service");
const account_services_1 = require("../../services/account.services");
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.header('authorization');
        if (!token) {
            return res.status(500).json({
                message: "Shame on you, put token"
            });
        }
        const account = yield (0, account_services_1.findByToken)(token);
        if (!account) {
            return res.status(500).json({
                message: "Shame on you, there's no acc with this token"
            });
        }
        const todos = yield ((0, todo_service_1.allTodos)(account.id));
        const mapped = todos.map(todo => {
            return {
                id: todo.id,
                title: todo.title,
                isCompleted: todo.isCompleted
            };
        });
        return res.status(200).json({
            mapped
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Error in All todos",
            err
        });
    }
});
