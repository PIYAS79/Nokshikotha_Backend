import { model, Schema } from "mongoose";
import { Banner_Type } from "./banner.interface";



const Banner_Schema = new Schema<Banner_Type>({
    link: {
        type: String,
        required: [true, "Link is required *"]
    }
}, {
    timestamps: true
})

export const Banner_Model = model<Banner_Type>('Banner', Banner_Schema);