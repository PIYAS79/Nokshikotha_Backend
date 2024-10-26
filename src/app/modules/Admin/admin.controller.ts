import { NextFunction, Request, Response } from "express";
import Async_Catch from "../../utils/Try_Code";
import httpStatus from 'http-status-codes';
import { Admin_Services } from "./admin.services";


const Login_Admin_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {
    const result = await Admin_Services.Login_Admin_Service(req.body);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully login admin",
        data: result
    })
})


export const Admin_Controller = {
    Login_Admin_Controller,

}