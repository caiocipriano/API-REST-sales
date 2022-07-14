import  express, { NextFunction, Request, Response }  from "express";
import cors from 'cors'

import routes from './routes/index'
import AppError from "@shared/errors/AppError";

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)

app.use((erro:Error, request:Request,response:Response, next:NextFunction)=>{
    if(erro instanceof AppError){
        return response.status(erro.statusCode).json({
            status:'Error',
            message:erro.message,
        })
    }
    return response.status(500).json({
        status:'Error',
        message:'Internal Server Error'
    })
})

app.listen(8080,()=>{
    console.log("Server running!🤖")
})