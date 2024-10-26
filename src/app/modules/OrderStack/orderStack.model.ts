import { model, Schema } from "mongoose";
import { OrderStack_Type } from "./orderStack.interface";


const OrderStack_Schema = new Schema<OrderStack_Type>({
    orderNo: {
        type: Number,
        required: [true, "Order Number is required *"],
        unique: true
    },
    address: {
        type: String,
        required: [true, "Address is a required field *"]
    },
    dateAndTime: {
        type: String,
        requeird: [true, "Date and time is required *"]
    },
    name: {
        type: String,
        required: [true, "Name is requierd *"]
    },
    orderNote: {
        type: String,
    },
    packageNo: {
        type: [Number],
        required: [true, "Package Number is required *"]
    },
    phone: {
        type: String,
        required: [true, "Phone number is requierd *"]
    },
    totalPrice: {
        type: Number,
        required: [true, "Total Price is required *"]
    },
    status: {
        type: String,
        enum: {
            values: ["DELIVERED", "PROCESSING"],
            message: `{VALUE} is not assignable with values "PROCESSING" or "DELIVERED"`
        }
    }
},{
    timestamps:true
})

export const OrderStack_Model = model<OrderStack_Type>("OrderStack",OrderStack_Schema);
