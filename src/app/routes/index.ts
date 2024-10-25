
import express from 'express';
import { Package_Router } from '../modules/Package/package.route';

const router = express.Router();


const Project_Routes = [
    {
        path: '/package',
        route: Package_Router
    }
]


Project_Routes.forEach((one) => router.use(one.path, one.route));
export const Project_Final_Routes = router;