import mongoose from "mongoose";

export class MongoDB {
    static async connectDB() {
        const DB_URL = 'mongodb://127.0.0.1:27017/ShopManager';
        return await mongoose.connect(DB_URL);
    }
}