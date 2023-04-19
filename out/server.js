"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./api/router"));
const app = (0, express_1.default)();

app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api', router_1.default);
app.get('/' ,(req,res) => {
    return res.status(200).json({
        message: "Worked"
    })
})

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Serever is running on port: ${port}`);
});

module.exports = app