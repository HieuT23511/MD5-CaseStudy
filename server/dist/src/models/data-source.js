"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class MongoDB {
    static async connectDB() {
        const DB_URL = 'mongodb://127.0.0.1:27017/ShopManager';
        return await mongoose_1.default.connect(DB_URL);
    }
}
exports.MongoDB = MongoDB;
//# sourceMappingURL=data-source.js.map