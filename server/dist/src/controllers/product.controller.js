"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const productType_schema_1 = __importDefault(require("../models/schemas/productType.schema"));
const product_schema_1 = __importDefault(require("../models/schemas/product.schema"));
class productController {
    static async getTypeProduct(req, res) {
        try {
            const productsType = await productType_schema_1.default.find();
            if (productsType) {
                res.status(200).json({
                    message: "Success!",
                    productType: productsType
                });
            }
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }
    static async getProductList(req, res) {
        try {
            const productList = await product_schema_1.default.find().populate('productType');
            if (productList) {
                res.status(200).json({
                    message: "Success!",
                    productList: productList
                });
            }
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }
    static async getProductDetail(req, res) {
        try {
            let id = req.params.id;
            let product = await product_schema_1.default.findOne({ _id: id });
            if (product) {
                res.status(200).json({
                    message: "Success",
                    product: product
                });
            }
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }
    static async addProduct(req, res) {
        try {
            const { name, oldPrice, price, image, productType, description, isNew } = req.body;
            let product = await product_schema_1.default.findOne({ name: name });
            if (!product) {
                let newProduct = new product_schema_1.default({
                    name: name,
                    oldPrice: oldPrice,
                    price: price,
                    image: image,
                    productType: productType,
                    description: description,
                    isNew: isNew
                });
                let result = await newProduct.save();
                if (result) {
                    res.status(200).json({
                        message: "Creat new product success!",
                        newProduct: result
                    });
                }
            }
            else {
                res.status(500).json({
                    message: "Product already exist"
                });
            }
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }
    static async deleteProduct(req, res) {
        try {
            let id = req.params.id;
            let productDelete = await product_schema_1.default.findOne({ _id: id });
            if (productDelete) {
                await productDelete.deleteOne();
                res.status(200).json({
                    message: "Delete product success!"
                });
            }
            else {
                res.status(500).json({
                    message: "Product does not exist"
                });
            }
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }
    static async updateProduct(req, res) {
        try {
            let id = req.params.id;
            let productUpdate = await product_schema_1.default.findOne({ _id: id });
            if (productUpdate) {
                const { name, oldPrice, price, image, productType, description, isNew } = req.body;
                productUpdate.name = name;
                productUpdate.oldPrice = oldPrice;
                productUpdate.price = price;
                productUpdate.image = image;
                productUpdate.productType = productType;
                productUpdate.description = description;
                productUpdate.isNew = isNew;
                let result = await productUpdate.save();
                if (result) {
                    res.status(200).json({
                        message: "Update product success!",
                        productUpdated: result
                    });
                }
            }
            else {
                res.status(500).json({
                    message: "Product does not exist"
                });
            }
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }
}
exports.productController = productController;
//# sourceMappingURL=product.controller.js.map