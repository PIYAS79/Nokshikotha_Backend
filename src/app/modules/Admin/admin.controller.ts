import { NextFunction, Request, Response } from "express";
import Async_Catch from "../../utils/Try_Code";
import httpStatus from 'http-status-codes';
import { Admin_Services } from "./admin.services";


// admnin login controller 
const Login_Admin_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {
    const result = await Admin_Services.Login_Admin_Service(req.body);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully login admin",
        data: result
    })
})

// admnin meta data controller 
const Dashboard_MetaData_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {
    const result = await Admin_Services.Dashboard_MetaData_Service();

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully get dashboard meta data",
        data: result
    })
})


export const Admin_Controller = {
    Login_Admin_Controller,
    Dashboard_MetaData_Controller,

}