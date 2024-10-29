import { NextFunction, Request, Response } from "express";
import Async_Catch from "../../utils/Try_Code";
import httpStatus from 'http-status-codes';
import { Charge_Service } from "./charge.services";


// create delivery charge controller
const Create_Charge_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {
    const result = await Charge_Service.Create_Charge_Service(req.body);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Create Delivery Charge",
        data: result
    })
})

// update delivery charge controller
const Update_Charge_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {
    const result = await Charge_Service.Update_Charge_Service(req.body,req.params.cid);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Update Delivery Charge",
        data: result
    })
})

// get delivery charge controller
const Get_Charge_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {
    const result = await Charge_Service.Get_Charge_Service();

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Get Delivery Charge",
        data: result
    })
})



export const Charge_Controller = {
    Create_Charge_Controller,
    Update_Charge_Controller,
    Get_Charge_Controller
}