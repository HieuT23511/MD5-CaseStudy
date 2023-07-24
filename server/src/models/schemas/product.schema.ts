import {Schema, Document, model} from "mongoose";

export interface IProduct extends Document {
    name: string;
    oldPrice: number;
    price: number;
    image: string;
    category: any;
    isNew: any;
    description: string;
    
}

const productSchema: Schema = new  Schema<IProduct>({
    name: String,
    oldPrice: Number,
    price: Number,
    image: String,
    category: { type: Schema.Types.ObjectId, ref: "ProductType" },
    isNew: {type: Boolean, default: true},
    description: String
});

const Product = model<IProduct>('Product', productSchema);

export default Product;