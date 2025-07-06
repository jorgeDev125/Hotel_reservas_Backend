import { Router } from "express";
import { handleInputErrors } from "../middleware/validation.js";
import { body, param } from "express-validator";
import { ReservationController } from "../controllers/ReservationController.js";

const router = Router();

// Route to create a new customer
router.post(
  "/",
  body("habitacionId")
    .trim()
    .isNumeric()
    .withMessage("Id de Habitación debe ser un número")
    .notEmpty()
    .withMessage("Id de Habitación es obligatorio"),
  body("numeroNoches")
    .trim()
    .isNumeric()
    .withMessage("El número de noches debe ser un número")
    .notEmpty()
    .withMessage("El número de noches es obligatorio"),
  body("clienteId")
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

//Rout for select reservations grouped by status
router.get("/estados", handleInputErrors, ReservationController.getReservationsGroupedByStatus)

// Route for update reservation status
router.put("/:id/estado",
  param("id").isNumeric().withMessage("Dato no válido"),
  body("estadoId").trim().isNumeric().withMessage("El estadoId debe ser un número"),
  handleInputErrors,
  ReservationController.updateReservationStatus
)

//Route to get reservation by id
router.get('/:id', 
  param("id").isNumeric().withMessage("Dato no válido"),
  handleInputErrors,
  ReservationController.getReservationById);

export default router;
