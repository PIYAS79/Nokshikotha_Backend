import { NextFunction, Request, Response } from "express";
import Async_Catch from "../../utils/Try_Code";
import httpStatus from 'http-status-codes';
import { Package_Sevices } from "./package.services";


const Create_Package_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const result = await Package_Sevices.Create_Package_Service(req.body);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Create A Package",
        data: result
    })
})

export const Package_Controller = {
    Create_Package_Controller,

}