


import { z } from 'zod';



export const Zod_Create_Charge_Type = z.object({
    body: z.object({
        charge: z.number()
    })
})

export const Zod_Update_Charge_Type = z.object({
    body: z.object({
        charge: z.number()
    })
})