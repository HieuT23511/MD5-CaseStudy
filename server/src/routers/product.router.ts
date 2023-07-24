import express from 'express';
import { productController } from '../controllers/product.controller';

const productRouter = express.Router();
productRouter.get('/list', productController.getProductList);
productRouter.get('/detail/:id', productController.getProductDetail);
productRouter.post('/add', productController.addProduct);
productRouter.put('/update/:id', productController.updateProduct);
productRouter.delete('/delete/:id', productController.deleteProduct);

export default productRouter;



