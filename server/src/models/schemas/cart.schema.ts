import { Schema, Document, model } from "mongoose";

export interface ICart extends Document {
    products: any;
    quantity: number;
    totalMoney: number
}
const cartSchema: Schema = new Schema<ICart>({
    products: { type: Schema.Types.ObjectId, ref: "Product" },
    quantity: Number,
    totalMoney: Number
});

const Cart = model<ICart>('Cart', cartSchema);

export default Cart;
