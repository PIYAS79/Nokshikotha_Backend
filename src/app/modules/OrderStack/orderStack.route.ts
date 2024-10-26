

import express from 'express';
import Zod_Validation_Request from '../../middlewares/validation_request';
import { Zod_Create_OrderStack_Type, Zod_Update_OrderStatus_Type } from './orderStack.zod';
import { OrderStack_Controller } from './orderStack.controller';


const router = express.Router();

// create a order api
router.post('/', Zod_Validation_Request(Zod_Create_OrderStack_Type), OrderStack_Controller.Create_OrderStack_Controller);

// update order status api
router.patch('/update/:oid', Zod_Validation_Request(Zod_Update_OrderStatus_Type), OrderStack_Controller.Update_Order_Status_Contorller);

export const OrderStack_Routes = router;
