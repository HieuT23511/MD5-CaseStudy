import ProductType from "../models/schemas/productType.schema";
import Product from "../models/schemas/product.schema";

export class productController {

    static async getTypeProduct(req: any, res:any) {
        try {
            const productsType =  await ProductType.find();
            if (productsType) {
                res.status(200).json({
                    message: "Success!",
                    productType: productsType
                });
            }
        } catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }
    static async getProductList(req: any, res: any) {
        try {
            const productList = await Product.find().populate('productType');
            if (productList) {
                res.status(200).json({
                    message: "Success!",
                    productList: productList
                });
            }
        } catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }

    static async getProductDetail(req: any, res: any) {
        try {
            let id = req.params.id;
            let product = await Product.findOne({ _id: id });
            if (product) {
                res.status(200).json({
                    message: "Success",
                    product: product
                });
            }
        } catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }

    static async addProduct(req: any, res: any) {
        try {
            const { name, oldPrice, price, image, productType, description, isNew } = req.body;
            let product = await Product.findOne({ name: name });
            if (!product) {
                let newProduct = new Product({
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
            } else {
                res.status(500).json({
                    message: "Product already exist"
                });
            }
        } catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }

    static async deleteProduct(req: any, res: any) {
        try {
            let id = req.params.id;
            let productDelete = await Product.findOne({ _id: id });
            if (productDelete) {
                await productDelete.deleteOne();
                res.status(200).json({
                    message: "Delete product success!"
                });
            } else {
                res.status(500).json({
                    message: "Product does not exist"
                });
            }
        } catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }

    static async updateProduct(req: any, res: any) {
        try {
            let id = req.params.id;
            let productUpdate = await Product.findOne({ _id: id });
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
            } else {
                res.status(500).json({
                    message: "Product does not exist"
                });
            }
        } catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }

}