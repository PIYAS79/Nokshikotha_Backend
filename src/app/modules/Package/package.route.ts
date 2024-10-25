


import express from 'express';
import Zod_Validation_Request from '../../middlewares/validation_request';
import { Zod_Create_Package_Type, Zod_Update_Package_Type } from './package.zod';
import { Package_Controller } from './package.controller';

const route = express.Router();

route.post('/', Zod_Validation_Request(Zod_Create_Package_Type), Package_Controller.Create_Package_Controller);
route.patch('/:pid', Zod_Validation_Request(Zod_Update_Package_Type), Package_Controller.Update_Package_Controller);
route.get('/', Package_Controller.Get_All_Package_Controller);
route.delete('/:pid', Package_Controller.Delete_Package_Controller);


export const Package_Router = route;