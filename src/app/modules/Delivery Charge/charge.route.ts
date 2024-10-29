
import express from 'express';
import Zod_Validation_Request from '../../middlewares/validation_request';
import { Zod_Create_Charge_Type, Zod_Update_Charge_Type } from './charge.zod';
import { Charge_Controller } from './charge.controller';


const router = express.Router();


// crate delivery charge api 
router.post('/', Zod_Validation_Request(Zod_Create_Charge_Type), Charge_Controller.Create_Charge_Controller);

// update delivery charge api
router.patch('/:cid', Zod_Validation_Request(Zod_Update_Charge_Type), Charge_Controller.Update_Charge_Controller);

// get delivery charge api
router.get('/', Charge_Controller.Get_Charge_Controller);


export const Charge_Routes = router; 