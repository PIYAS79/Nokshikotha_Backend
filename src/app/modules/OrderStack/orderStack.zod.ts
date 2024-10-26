import { z } from "zod";



export const Zod_Create_OrderStack_Type = z.object({
    body: z.object({
        name: z.string(),
        phone: z.string(),
        address: z.string(),
        orderNote: z.string(),
        packageId: z.array(z.string()),
    })
})

export const Zod_Update_OrderStatus_Type = z.object({
    body:z.object({
        status:z.boolean()
    })
})

