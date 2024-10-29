import { NextFunction, Request, Response } from "express";
import Async_Catch from "../../utils/Try_Code";
import httpStatus from 'http-status-codes';
import { Banner_Services } from "./banner.services";


// create banner controller 
const Create_Banner_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const result = await Banner_Services.Create_Banner_Service(req.body);
    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Create Banner",
        data: result
    })

})

// delete banner controller 
const Delete_Banner_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const result = await Banner_Services.Delete_Banner_Service(req.params.bid);
    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Delete A Banner",
        data: result
    })

})

// delete banner controller 
const Get_Banner_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const result = await Banner_Services.Get_Banner_Service();
    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Get Banner",
        data: result
    })

})

// delete banner controller 
const Update_Banner_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const result = await Banner_Services.Update_Banner_Service(req.body, req.params.bid);
    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Update Banners",
        data: result
    })

})


export const Banner_Controller = {
    Create_Banner_Controller,
    Delete_Banner_Controller,
    Get_Banner_Controller,
    Update_Banner_Controller
}