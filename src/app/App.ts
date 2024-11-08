import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import httpStatus from 'http-status-codes'
import Global_Error_Handler from './errors/Global_Error_Handler';
import { Project_Final_Routes } from './routes';
import config from './config';

const app = express();

// middlewares
app.use(express.json());
app.use(cors({
    origin: ["https://nakshidhara.netlify.app","http://localhost:5173"],
    credentials: true, 
}));

// Project Routes
app.use('/app/v1', Project_Final_Routes);


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