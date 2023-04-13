"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const account_routes_1 = __importDefault(require("./account.routes"));
const todo_routes_1 = __importDefault(require("./todo.routes"));
const router = (0, express_1.Router)();
router.use('/account', account_routes_1.default);
router.use('/todos', todo_routes_1.default);
exports.default = router;
