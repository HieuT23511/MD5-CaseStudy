import express from 'express';
import bodyParser from "body-parser";
import {MongoDB} from "./src/models/data-source";
import productRouter from './src/routers/product.router';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));

MongoDB.connectDB()
    .then(() => console.log('DB connected!'))
    .catch((err) => console.log(err.messages));


app.use('/api/product', productRouter);

app.listen(8000, 'localhost', () => {
    console.log('Server is running at http://localhost:8000');
});