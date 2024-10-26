import Final_App_Error from "../../errors/Final_App_Error";
import { Admin_Type } from "./admin.interface";
import { Admin_Model } from "./admin.model";
import httpStatus from 'http-status-codes';


const Login_Admin_Service = async (data: Admin_Type) => {

    const result = await Admin_Model.findOne({ email: data.email });
    if (!result) {
        throw new Final_App_Error(httpStatus.NOT_FOUND, "Email is not correct *");
    }
    if (result.password !== data.password) {
        throw new Final_App_Error(httpStatus.UNAUTHORIZED, "Password is not matched *");
    }
    return result;

}


export const Admin_Services = {
    Login_Admin_Service,

}