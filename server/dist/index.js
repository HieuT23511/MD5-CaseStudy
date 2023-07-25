"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const data_source_1 = require("./src/models/data-source");
const product_router_1 = __importDefault(require("./src/routers/product.router"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
data_source_1.MongoDB.connectDB()
    .then(() => console.log('DB connected!'))
    .catch((err) => console.log(err.messages));
app.use('/api/product', product_router_1.default);
app.listen(8000, 'localhost', () => {
    console.log('Server is running at http://localhost:8000');
});
//# sourceMappingURL=index.js.map