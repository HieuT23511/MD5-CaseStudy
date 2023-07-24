import Product from "../models/schemas/product.schema";

export class ProductController {
    static async getAll(req, res) {
        try {
            const list = await Product.find();
            if (list) {
                res.status(200).json({
                    message: "Thành Công!",
                    list: list
                });
            }
        } catch (err) {
            console.log(err.message);
            res.status(500).json({message:'Lỗi'})
        }
    }

    static async addProduct(req, res) {
        try {
            const productData = new Product ({
                name: req.body.name,
                oldPrice: req.body.oldPrice,
                price: req.body.price,
                image: req.body.image,
                category: req.body.category,
                description: req.body.description,
                isNew: req.body.isNew
            });
            await productData.save()
            res.status(200).json({
                message: "Tạo Thành Công!",
                data: productData
                });
               
        } catch (err) {
            console.log(err.message);
            res.status(500).json({message:'Lỗi'})
        }
    }

}