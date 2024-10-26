import express from 'express';
import Zod_Validation_Request from '../../middlewares/validation_request';
import { Zod_Create_Banner_Type } from './banner.zod';
import { Banner_Controller } from './banner.controller';


const router = express.Router();


// create a banner api
router.post('/', Zod_Validation_Request(Zod_Create_Banner_Type), Banner_Controller.Create_Banner_Controller);

// delete a banner api
router.delete('/:bid', Banner_Controller.Delete_Banner_Controller);

// get all banners api
router.get('/', Banner_Controller.Get_All_Banner_Controller);


export const Banner_Routes = router;