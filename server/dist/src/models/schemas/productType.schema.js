"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productTypeSchema = new mongoose_1.Schema({
    name: String
});
const ProductType = (0, mongoose_1.model)('ProductType', productTypeSchema);
exports.default = ProductType;
//# sourceMappingURL=productType.schema.js.map