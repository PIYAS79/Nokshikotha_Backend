
import express from 'express';
import { Package_Router } from '../modules/Package/package.route';
import { Banner_Routes } from '../modules/Banner/banner.route';
import { Admin_Routes } from '../modules/Admin/admin.route';
import { OrderStack_Routes } from '../modules/OrderStack/orderStack.route';

const router = express.Router();


const Project_Routes = [
    {
        path: '/package',
        route: Package_Router
    },
    {
        path: '/banner',
        route: Banner_Routes
    },
    {
        path: '/admin',
        route: Admin_Routes
    },
    {
        path: '/order',
        route: OrderStack_Routes
    }
]


Project_Routes.forEach((one) => router.use(one.path, one.route));
export const Project_Final_Routes = router;