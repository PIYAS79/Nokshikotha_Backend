import { NextFunction, Request, Response } from "express";
import Async_Catch from "../../utils/Try_Code";
import httpStatus from 'http-status-codes';
import { Package_Sevices } from "./package.services";

// create package controller
const Create_Package_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const result = await Package_Sevices.Create_Package_Service(req.body);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Create A Package",
        data: result
    })
})

// update package controller
const Update_Package_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const result = await Package_Sevices.Update_Package_Service(req.body, req.params.pid);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Update A Package",
        data: result
    })
})

// get all package controller 
const Get_All_Package_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const result = await Package_Sevices.Get_All_Package_Service();

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Get All Packages",
        data: result
    })
})

// get one package controller 
const Get_One_Package_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const result = await Package_Sevices.Get_One_Package_Service(req.params.pid);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Get One Packages",
        data: result
    })
})

// delete package controller 
const Delete_Package_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const result = await Package_Sevices.Delete_Package_Service(req.params.pid);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Delete A Package",
        data: result
    })
})

export const Package_Controller = {
    Create_Package_Controller,
    Update_Package_Controller,
    Get_All_Package_Controller,
    Delete_Package_Controller,
    Get_One_Package_Controller,
}