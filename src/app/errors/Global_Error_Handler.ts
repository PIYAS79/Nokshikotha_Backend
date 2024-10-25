import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status-codes';
import { Error_Source_Type } from '../global/Error_Types';
import { duplicateKeyError, mongooseValidationErorr, refNotFoundError, zodValidationError } from '../utils/Error_Handler';
import { ZodError } from 'zod';
import Final_App_Error from './Final_App_Error';

const Global_Error_Handler = (err: any, req: Request, res: Response, next: NextFunction) => {

    let Error_Title: string = "There is an server side error *";
    let Error_Source: Error_Source_Type = [{
        path: '',
        message: 'There is an server side error *'
    }]
    let Error_Status_Code = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;

    if (err instanceof ZodError) {
        const gettedFormat = zodValidationError(err);
        Error_Title = gettedFormat.errorTitle;
        Error_Source = gettedFormat.errorSouce;
    } else if (err.name === 'ValidationError') {
        const gettedFormat = mongooseValidationErorr(err);
        Error_Title = gettedFormat.errorTitle;
        Error_Source = gettedFormat.errorSouce;
    } else if (err.code === 11000) {
        const gettedFormat = duplicateKeyError(err);
        Error_Title = gettedFormat.errorTitle;
        Error_Source = gettedFormat.errorSouce;
    } else if (err.name === 'CastError') {
        const gettedFormat = refNotFoundError(err);
        Error_Title = gettedFormat.errorTitle;
        Error_Source = gettedFormat.errorSouce;
        Error_Status_Code = 404;
    } else if (err instanceof Error) {
        Error_Title = err.message;
        Error_Source = [{
            path: '',
            message: err.message
        }]
    } else if (err instanceof Final_App_Error) {
        Error_Title = err.message;
        Error_Source = [{
            path: '',
            message: err.message
        }]
        Error_Status_Code = err.statusCode
    }


    res.status(Error_Status_Code).json({
        success: false,
        message: Error_Title,
        source: Error_Source,
        error: err,
        stack: err.stack
    })
}

export default Global_Error_Handler;