import express from 'express';
import {config} from 'dotenv';
import { fileURLToPath } from 'url';
import path,{ dirname } from 'path';//to resolve __dirname not defined in ES module scope
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

const app= express();

app.use(cors({
    origin:"http://127.0.0.1:5000",
    methods:["GET","POST"]
}))

app.set('PORT',process.env.PORT)

app.listen(app.get('PORT'),()=>{
    console.log(app.get('PORT'))
})