"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cartSchema = new mongoose_1.Schema({
    products: { type: mongoose_1.Schema.Types.ObjectId, ref: "Product" },
    quantity: Number,
    totalMoney: Number
});
const Cart = (0, mongoose_1.model)('Cart', cartSchema);
exports.default = Cart;
//# sourceMappingURL=cart.schema.js.map