import { model, Schema } from "mongoose";
import { Delivery_Charge_Type } from "./delivery.charge.interface"




const Delivery_Charge_Schema = new Schema<Delivery_Charge_Type>({
    charge: {
        type: Number,
        required: [true, "Charge is required *"]
    }
}, {
    timestamps: true
})


export const Delivery_Charge_Model = model<Delivery_Charge_Type>('DeliveryCharge', Delivery_Charge_Schema);