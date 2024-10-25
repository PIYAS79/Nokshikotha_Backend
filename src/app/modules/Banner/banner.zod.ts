

import {z} from 'zod';



export const Zod_Create_Banner_Type = z.object({
    body:z.object({
        link:z.string()
    })
})