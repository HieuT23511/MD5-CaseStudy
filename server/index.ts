import express from 'express';
import bodyParser from "body-parser";
import {MongoDB} from "./src/models/data-source";
import { router } from './src/router/api/api.router';

const app = express();

MongoDB.connectDB()
    .then(() => console.log('DB connected!'))
    .catch((err) => console.log(err.messages));

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api', router);

app.listen(3000, 'localhost', () => {
    console.log('Server is running at http://localhost:8000');
});