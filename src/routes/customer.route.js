
import { Router } from "express";

import { handleInputErrors } from "../middleware/validation.js";
//import { body, param } from "express-validator";
import { CustomerController } from "../controllers/CustomerController.js";

const router = Router();

router.get("/", 
    handleInputErrors,
    CustomerController.getCustomers
);




export default router;
