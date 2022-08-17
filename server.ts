import bodyParser from "body-parser";
import express from "express";
import fileUpload from "express-fileupload";
import { routes } from "./src/routes/routes";
import dataSource from "./src/data-source";
import cors from 'cors';

let PORT = 3000;
const app = express();
dataSource.connect();
app.use(bodyParser.json());
app.use(express.json());
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(cors());
app.use(fileUpload({
    createParentPath: true
}))
app.use(express.static('public'))
app.use("", routes);
app.listen(PORT, () => {
    console.log(`Running http://localhost:${PORT}`);
})