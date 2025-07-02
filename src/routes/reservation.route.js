import { Router } from "express";
import { handleInputErrors } from "../middleware/validation.js";
import { body } from "express-validator";
import { ReservationController } from "../controllers/ReservationController.js";

const router = Router();

// Route to create a new customer
router.post(
  "/",
  body("habitacion_id")
    .trim()
    .isNumeric()
    .withMessage("Id de Habitación debe ser un número")
    .notEmpty()
    .withMessage("Id de Habitación es obligatorio"),
  body("numero_noches")
    .trim()
    .isNumeric()
    .withMessage("El número de noches debe ser un número")
    .notEmpty()
    .withMessage("El número de noches es obligatorio"),
  body("cliente_id")
    .trim()
    .isNumeric()
    .withMessage("Id de cliente debe ser un número")
    .notEmpty()
    .withMessage("Id de cliente es obligatorio"),  
  handleInputErrors,
  ReservationController.createReservation
);

// Route to get all customers
router.get("/", handleInputErrors, ReservationController.getReservations);

// Route to get a customer by cedula
/* router.get(
  "/:cedula",
  param("cedula").isNumeric().withMessage("Cédula no válida"),
  handleInputErrors,
  ReservationController.getUCustomerByCedula
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
  ReservationController.updateCustomer
); */

export default router;
