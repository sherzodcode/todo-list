"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const addTodo_1 = __importDefault(require("../../controllers/todos/addTodo"));
const allTodos_1 = __importDefault(require("../../controllers/todos/allTodos"));
const deleteTodoById_1 = __importDefault(require("../../controllers/todos/deleteTodoById"));
const updateIsCompleted_1 = __importDefault(require("../../controllers/todos/updateIsCompleted"));
const updateTodoById_1 = __importDefault(require("../../controllers/todos/updateTodoById"));
const router = (0, express_1.Router)();
router.get('/', allTodos_1.default);
router.post('/', addTodo_1.default);
router.put('/:id', updateTodoById_1.default);
router.patch('/:id', updateIsCompleted_1.default);
router.delete('/:id', deleteTodoById_1.default);
exports.default = router;
