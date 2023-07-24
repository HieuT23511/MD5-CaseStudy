"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: String,
    oldPrice: Number,
    price: Number,
    image: String,
    productType: { type: mongoose_1.Schema.Types.ObjectId, ref: "ProductType" },
    isNew: { type: Boolean, default: true },
    description: String
});
const Product = (0, mongoose_1.model)('Product', productSchema);
exports.default = Product;
//# sourceMappingURL=product.schema.js.map