


import express from 'express';
import Zod_Validation_Request from '../../middlewares/validation_request';
import { Zod_Create_Package_Type } from './package.zod';
import { Package_Controller } from './package.controller';

const route = express.Router();

route.post('/', Zod_Validation_Request(Zod_Create_Package_Type), Package_Controller.Create_Package_Controller);


export const Package_Router = route;