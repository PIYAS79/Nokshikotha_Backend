import { model, Schema } from "mongoose";
import { Package_Type } from "./package.interface";



const Package_Schema = new Schema<Package_Type>({
    package_no: {
        type: Number,
        unique: true,
        required: [true, "Package Number is required *"]
    },
    package_name: {
        type: String,
        required: [true, "Package Name is required *"]
    },
    package_price: {
        type: Number,
        requierd: [true, "Package Price is required *"]
    },
    package_status: {
        type: String,
        enum: {
            values: ["ACTIVE", "BLOCK"],
            message: '{VALUE} is not assignable to types "ACTIVE" OR "BLOCK"'
        },
        required: [true, "Package Status is required *"]
    }
}, {
    timestamps: true
})

export const Package_Model = model<Package_Type>("Package", Package_Schema);