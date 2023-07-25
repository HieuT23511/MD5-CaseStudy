"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controllers/product.controller");
const productRouter = express_1.default.Router();
productRouter.get('/list', product_controller_1.productController.getProductList);
productRouter.get('/types', product_controller_1.productController.getTypeProduct);
productRouter.get('/detail/:id', product_controller_1.productController.getProductDetail);
productRouter.post('/add', product_controller_1.productController.addProduct);
productRouter.put('/update/:id', product_controller_1.productController.updateProduct);
productRouter.delete('/delete/:id', product_controller_1.productController.deleteProduct);
exports.default = productRouter;
//# sourceMappingURL=product.router.js.map