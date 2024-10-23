import express, { Request, Response } from 'express';
import cors from 'cors';
import httpStatus from 'http-status-codes'

const app = express();

// middlewares ---------------------
app.use(express.json());
app.use(cors())



// initial route fo the project
app.get('/',(req:Request,res:Response)=>{
    res.status(httpStatus.OK).json({
        success:true,
        message:"Nokshikotha backend is running 😍"
    })
})



// route not found error

// global error handler route 



export default app;