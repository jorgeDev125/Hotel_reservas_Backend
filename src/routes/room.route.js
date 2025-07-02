import { Router } from "express";
import { handleInputErrors } from "../middleware/validation.js";
//import { body, param } from "express-validator";
import { RoomController } from "../controllers/RoomController.js";

const router = Router();

// Route to create a new customer
/* router.post(
  "/",
  body("cedula").trim().isNumeric().withMessage("La cedula debe ser un número"),
  body("nombre")
    .trim()
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 2 })
    .withMessage("El nombre es muy corto, mínimo 2 caracteres"),
  body("apellido")
    .trim()
    .notEmpty()
    .withMessage("El apellido es obligatorio")
    .isLength({ min: 2 })
    .withMessage("El apellido es muy corto, mínimo 2 caracteres"),
  body("email")
    .optional({ nullable: true })
    .trim()
    .isEmail()
    .withMessage("El email debe ser válido"),
  body("telefono")
    .optional({ nullable: true })
    .trim()
    .isNumeric()
    .withMessage("El telefono debe ser un número"),
  handleInputErrors,
  RoomController.createCustomer
); */

// Route to get all customers
router.get("/", handleInputErrors, RoomController.getRooms);

// Route to get a customer by cedula
/* router.get(
  "/:cedula",
  param("cedula").isNumeric().withMessage("Cédula no válida"),
  handleInputErrors,
  RoomController.getUCustomerByCedula
);

router.put(
  "/:cedula",
  param("cedula").isNumeric().withMessage("Cédula no válida"),
  body("cedula").trim().isNumeric().withMessage("La cedula debe ser un número"),
  body("nombre")
    .trim()
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 2 })
    .withMessage("El nombre es muy corto, mínimo 2 caracteres"),
  body("apellido")
    .trim()
    .notEmpty()
    .withMessage("El apellido es obligatorio")
    .isLength({ min: 2 })
    .withMessage("El apellido es muy corto, mínimo 2 caracteres"),
  body("email")
    .optional({ nullable: true })
    .trim()
    .isEmail()
    .withMessage("El email debe ser válido"),
  body("telefono")
    .optional({ nullable: true })
    .trim()
    .isNumeric()
    .withMessage("El telefono debe ser un número"),
  handleInputErrors,
  RoomController.updateCustomer
); */

export default router;
