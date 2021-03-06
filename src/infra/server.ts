import "reflect-metadata";
import "./containers/registry"
import "./database/MongoConnection"
import "regenerator-runtime/runtime.js";
import cors from 'cors';
import express from "express";
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import { initializeLogs } from '../helpers/initializeLogs'
import { GETRoutes, POSTRoutes, PATCHRoutes, DELETERoutes } from '../controllers/routes'
dotenv.config()

const PORT = process.env.PORT;
const app = express();

app.disable('x-powered-by');
app.use(cors());
app.use(bodyParser.json());
app.use(GETRoutes)
app.use(POSTRoutes)
app.use(PATCHRoutes)
app.use(DELETERoutes)

initializeLogs(app);

app.listen(PORT, () => {
  console.log(`Costumer Microservice is running on port ${PORT}!`);
});