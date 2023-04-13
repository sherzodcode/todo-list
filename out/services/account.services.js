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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByToken = exports.findByUsername = exports.deleteAccount = exports.addAccount = void 0;
const client_1 = require(".prisma/client");
const md5_1 = __importDefault(require("md5"));
const prisma = new client_1.PrismaClient();
const addAccount = (account) => __awaiter(void 0, void 0, void 0, function* () {
    const token = (0, md5_1.default)(account.name + account.password);
    return prisma.account.create({
        data: {
            name: account.name,
            username: account.username,
            password: account.password,
            token
        }, include: {
            todo: true
        }
    });
});
exports.addAccount = addAccount;
const deleteAccount = (token) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.account.delete({
        where: {
            token: token
        }
    });
});
exports.deleteAccount = deleteAccount;
const findByUsername = (username) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.account.findUnique({
        where: {
            username
        }
    });
});
exports.findByUsername = findByUsername;
const findByToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.account.findFirst({
        where: {
            token
        },
        include: {
            todo: true
        }
    });
});
exports.findByToken = findByToken;
