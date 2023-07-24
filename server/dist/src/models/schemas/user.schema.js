"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: String,
    password: String,
    role: {
        type: String,
        default: 'user'
    },
    avatar: {
        type: String,
        default: 'no-avatar.png'
    },
    cart: { type: mongoose_1.Schema.Types.ObjectId, ref: "Cart" },
    google: {
        id: {
            type: String
        }
    },
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
//# sourceMappingURL=user.schema.js.map