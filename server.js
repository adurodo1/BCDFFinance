import express from 'express';
import {config} from 'dotenv';
import { fileURLToPath } from 'url';
import path,{ dirname } from 'path';//to resolve __dirname not defined in ES module scope
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

import routes from './routes/bcdfRoutes.js';
//import {addAllCountries} from './controllers/bcdfController.js'

const app= express();

mongoose.Promise= global.Promise;
mongoose.connect('mongodb://localhost/BCDF',{useNewUrlParser:true,useUnifiedTopology:true})


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//dont use again
//app.post("/",addAllCountries)

app.set('PORT',3000||process.env.PORT)

routes(app);

app.listen(app.get('PORT'),()=>{
    console.log(app.get('PORT'))
})