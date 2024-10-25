import Final_App_Error from "../../errors/Final_App_Error";
import { Banner_Type } from "./banner.interface";
import { Banner_Model } from "./banner.model";
import httpStatus from 'http-status-codes'


const Create_Banner_Service = async (gettedData: Banner_Type) => {

    const result = await Banner_Model.create(gettedData);
    return result;

}

const Delete_Banner_Service = async (bid: string) => {

    const existingBanner = await Banner_Model.findById({ _id: bid }) as Banner_Type;
    if (!existingBanner) {
        throw new Final_App_Error(httpStatus.NOT_FOUND, "Banner Not Found *");
    }

    const result = await Banner_Model.findByIdAndDelete({ _id: bid });
    return result;

}


export const Banner_Services = {
    Create_Banner_Service,
    Delete_Banner_Service,

}