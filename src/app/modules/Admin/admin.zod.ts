


import {z} from 'zod';


export const Zod_Admin_Login_Type = z.object({
    body:z.object({
        email:z.string(),
        password:z.string()
    })
})


