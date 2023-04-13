"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const register_1 = __importDefault(require("../../controllers/accounts/register"));
const deleteAcc_1 = __importDefault(require("../../controllers/accounts/deleteAcc"));
router.post('/', register_1.default);
router.delete('/', deleteAcc_1.default);
exports.default = router;
