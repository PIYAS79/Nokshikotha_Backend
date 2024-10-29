import Final_App_Error from "../../errors/Final_App_Error";
import { Delivery_Charge_Model } from "./charge.model";
import { Delivery_Charge_Type } from "./delivery.charge.interface";
import httpStatus from 'http-status-codes';




// create delivery charge service
const Create_Charge_Service = async (gettedData: Delivery_Charge_Type) => {

    const result = await Delivery_Charge_Model.create(gettedData);
    return result;
}

// update delivery charge service
const Update_Charge_Service = async (gettedData: Delivery_Charge_Type, cid: string) => {

    const isDeliveryChargeDataExist = await Delivery_Charge_Model.findById({ _id: cid });
    if (!isDeliveryChargeDataExist) {
        throw new Final_App_Error(httpStatus.NOT_FOUND, "Delivery Charge Data not found *");
    }
    const result = await Delivery_Charge_Model.findByIdAndUpdate({ _id: cid }, gettedData, { new: true });
    return result;
}

// update delivery charge service
const Get_Charge_Service = async () => {
    const result = await Delivery_Charge_Model.find();
    return result;
}




export const Charge_Service = {
    Create_Charge_Service,
    Update_Charge_Service,
    Get_Charge_Service
}