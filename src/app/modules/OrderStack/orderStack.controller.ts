import { NextFunction, Request, Response } from "express";
import Async_Catch from "../../utils/Try_Code";
import httpStatus from 'http-status-codes';
import { OrderStack_Services } from "./orderStack.services";


// create a order controller
const Create_OrderStack_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {
    const result = await OrderStack_Services.Create_OrderStack_Service(req.body);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Create A Order",
        data: result
    })
})

// update order status controller 
const Update_Order_Status_Contorller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {
    const result = await OrderStack_Services.Update_Order_Status_Service(req.body, req.params.oid);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Update Order Status ",
        data: result
    })
})

// get all order controller 
const Get_All_Order_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {
    const result = await OrderStack_Services.Get_All_Order_Service();

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully get all order",
        data: result
    })
})

export const OrderStack_Controller = {
    Create_OrderStack_Controller,
    Update_Order_Status_Contorller,
    Get_All_Order_Controller,

}