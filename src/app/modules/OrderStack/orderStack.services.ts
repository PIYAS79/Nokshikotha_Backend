import Final_App_Error from "../../errors/Final_App_Error";
import { formatDateAndTime } from "../../utils/date.formatter";
import { Package_Type } from "../Package/package.interface";
import { Package_Model } from "../Package/package.model";
import { Create_OrderStack_Type, OrderStack_Type, Update_Order_Status_Type } from "./orderStack.interface";
import { OrderStack_Model } from "./orderStack.model";
import httpStatus from 'http-status-codes';


// create a order service 
const Create_OrderStack_Service = async (gettedData: Create_OrderStack_Type) => {

    const lastOrder = await OrderStack_Model.find().sort({ createdAt: -1 });
    let OrderNumber;
    if (lastOrder.length === 0) {
        OrderNumber = 1
    } else {
        OrderNumber = lastOrder[0].orderNo + 1;
    }
    let totalPackagePrice: number = 0;
    let packageNumbers: number[] = []

    for (const packageId of gettedData.packageId) {
        const isFound = (await Package_Model.findById(packageId)) as Package_Type;

        if (!isFound) {
            throw new Final_App_Error(httpStatus.NOT_FOUND, "Package Not Found *");
        }
        packageNumbers.push(isFound.package_no);
        totalPackagePrice += isFound.package_price;
    }

    const newOrder: OrderStack_Type = {
        orderNo: OrderNumber,
        address: gettedData.address,
        dateAndTime: formatDateAndTime(new Date()),
        name: gettedData.name,
        orderNote: gettedData.orderNote,
        packageNo: packageNumbers,
        phone: gettedData.phone,
        status: "PROCESSING",
        totalPrice: totalPackagePrice
    }

    const result = await OrderStack_Model.create(newOrder);
    return result;
}

// update order status service
const Update_Order_Status_Service = async (gettedData: Update_Order_Status_Type, oid: string) => {

    const isOrderExist = await OrderStack_Model.findById({ _id: oid }) as OrderStack_Type;
    if (!isOrderExist) {
        throw new Final_App_Error(httpStatus.NOT_FOUND, "Order not found *");
    }
    if (!gettedData.status) {
        throw new Final_App_Error(httpStatus.BAD_REQUEST, "Status must be true for change the status ");
    }
    const result = await OrderStack_Model.findByIdAndUpdate({ _id: oid }, { status: "DELIVERED" }, { new: true })
    return result;
}

// get all order service 
const Get_All_Order_Service = async () => {
    const result = await OrderStack_Model.find();
    return result;
}



export const OrderStack_Services = {
    Create_OrderStack_Service,
    Update_Order_Status_Service,
    Get_All_Order_Service,
    
}