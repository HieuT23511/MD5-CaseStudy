import mongoose from "mongoose";
export declare class MongoDB {
    static connectDB(): Promise<typeof mongoose>;
}
