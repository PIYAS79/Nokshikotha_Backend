import { NextFunction, Request, Response } from "express";
import Async_Catch from "../../utils/Try_Code";
import httpStatus from 'http-status-codes';
import { Banner_Services } from "./banner.services";


// create banner controller 
const Create_Banner_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const result = await Banner_Services.Create_Banner_Service(req.body);
    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Create A Banner",
        data: result
    })

})

// delete banner controller 
const Delete_Banner_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const result = await Banner_Services.Delete_Banner_Service(req.body.bid);
    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Delete A Banner",
        data: result
    })

})


export const Banner_Controller = {
    Create_Banner_Controller,
    Delete_Banner_Controller,

}