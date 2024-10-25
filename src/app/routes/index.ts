
import express from 'express';
import { Package_Router } from '../modules/Package/package.route';
import { Banner_Routes } from '../modules/Banner/banner.route';

const router = express.Router();


const Project_Routes = [
    {
        path: '/package',
        route: Package_Router
    },
    {
        path: '/banner',
        route: Banner_Routes
    }
]


Project_Routes.forEach((one) => router.use(one.path, one.route));
export const Project_Final_Routes = router;