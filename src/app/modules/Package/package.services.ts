import Final_App_Error from "../../errors/Final_App_Error";
import { Create_Package_Type, Package_Type } from "./package.interface";
import { Package_Model } from "./package.model";
import httpStatus from 'http-status-codes';



// create package service
const Create_Package_Service = async (gettedData: Create_Package_Type) => {

    const recentPackage = await Package_Model.find().sort({ createdAt: -1 });
    let packageNumber: number = 0;

    if (recentPackage.length == 0) {
        packageNumber = 1
    }else{
        packageNumber = recentPackage[0].package_no + 1;
    }

    const newPackage: Package_Type = {
        package_name: gettedData.package_name,
        package_price: gettedData.package_price,
        package_status: "ACTIVE",
        package_no: packageNumber
    }
    const result = await Package_Model.create(newPackage);
    return result;

}

// update package service 
const Update_Package_Service = async (gettedData: Partial<Create_Package_Type>, pid: string) => {

    const existingPackage = await Package_Model.findById({ _id: pid }) as Package_Type;
    if (!existingPackage) {
        throw new Final_App_Error(httpStatus.NOT_FOUND, "Package Not Found *");
    }

    const remainingProperties: Record<string, unknown> = { ...gettedData };
    const result = await Package_Model.findByIdAndUpdate({ _id: pid }, remainingProperties, { new: true })
    return result;

}

// get all package service 
const Get_All_Package_Service = async () => {

    const result = await Package_Model.find();
    return result;

}

// get one package service 
const Get_One_Package_Service = async (pid: string) => {

    const result = await Package_Model.findById({ _id: pid });
    if (!result) {
        throw new Final_App_Error(httpStatus.NOT_FOUND, "Package not found *");
    }
    return result;

}

// delete package service 
const Delete_Package_Service = async (pid: string) => {

    const existingPackage = await Package_Model.findById({ _id: pid }) as Package_Type;
    if (!existingPackage) {
        throw new Final_App_Error(httpStatus.NOT_FOUND, "Package Not Found *");
    }

    const result = await Package_Model.findByIdAndDelete({ _id: pid });
    return result;

}

export const Package_Sevices = {
    Create_Package_Service,
    Update_Package_Service,
    Get_All_Package_Service,
    Delete_Package_Service,
    Get_One_Package_Service,
}