


import {z} from 'zod';

export const Zod_Create_Package_Type = z.object({
    body:z.object({
        package_name:z.string(),
        package_price:z.number()
    })
})
