import { model, Schema } from "mongoose";
import { Admin_Type } from "./admin.interface";



const Admin_Schema = new Schema<Admin_Type>({
    email: {
        type: String,
        required: [true, "email is required field *"]
    },
    password: {
        type: String,
        required: [true, "password is required field *"]
    }
}, {
    timestamps: true
})


export const Admin_Model = model<Admin_Type>('Admin', Admin_Schema);