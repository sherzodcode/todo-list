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
const account_services_1 = require("../../services/account.services");
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.header('authorization');
        const oldUser = yield (0, account_services_1.findByToken)(token);
        if (!oldUser) {
            return res.status(500).json({
                message: "there's no user with this token"
            });
        }
        const deletedAccount = yield (0, account_services_1.deleteAccount)(token);
        return res.status(200).json({
            message: "Account and todos has been deleted",
            todo: oldUser.todo
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Error in Deleting account",
            err
        });
    }
});
