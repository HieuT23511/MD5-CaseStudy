import {Schema, Document, model} from "mongoose";

export interface IProductType extends Document {
    name: string;
}

const productTypeSchema: Schema = new  Schema<IProductType>({
    name: String
});

const ProductType = model<IProductType>('ProductType', productTypeSchema);

export default ProductType;