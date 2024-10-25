import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import httpStatus from 'http-status-codes'
import Global_Error_Handler from './errors/Global_Error_Handler';

const app = express();

// middlewares ---------------------
app.use(express.json());
app.use(cors())



// initial route fo the project
app.get('/', (req: Request, res: Response) => {
    res.status(httpStatus.OK).json({
        success: true,
        message: "Nokshidhara backend is running 😍"
    })
})



// route not found error
app.use("*", (req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "Route not found *"
    })
})

// global error handler route 
app.use(Global_Error_Handler);


export default app;