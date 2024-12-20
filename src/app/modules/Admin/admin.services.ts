import Final_App_Error from "../../errors/Final_App_Error";
import { OrderStack_Type } from "../OrderStack/orderStack.interface";
import { OrderStack_Model } from "../OrderStack/orderStack.model";
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
    result.password = '';
    return result;

}

// dashboard meta data service
const Dashboard_MetaData_Service = async () => {

    const orders = await OrderStack_Model.find() as OrderStack_Type[]
    const finalResult = {
        total_order: orders.length,
        processing_order: orders.filter(one => one.status === 'PROCESSING').length,
        complete_order: orders.filter(one => one.status === 'DELIVERED').length
    }

    return finalResult;
}


export const Admin_Services = {
    Login_Admin_Service,
    Dashboard_MetaData_Service
}