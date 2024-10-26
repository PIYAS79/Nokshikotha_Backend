

import express from 'express';
import { Admin_Controller } from './admin.controller';
import Zod_Validation_Request from '../../middlewares/validation_request';
import { Zod_Admin_Login_Type } from './admin.zod';



const router = express.Router();



router.post('/login', Zod_Validation_Request(Zod_Admin_Login_Type), Admin_Controller.Login_Admin_Controller);



export const Admin_Routes = router;