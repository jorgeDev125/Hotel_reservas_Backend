import { Router } from "express";
import { handleInputErrors } from "../middleware/validation.js";
import { param, body } from "express-validator";
import { RoomController } from "../controllers/RoomController.js";

const router = Router();

// Route to get all rooms
router.get("/", handleInputErrors, RoomController.getRooms);

//Rout for select rooms grouped by status
router.get("/estados", handleInputErrors, RoomController.getRoomsGroupedByStatus);

//Route gor get room by id
router.get(
  "/:habitacionId",
  param("habitacionId").isNumeric().withMessage("Habitación no válida"),
  handleInputErrors,
  RoomController.getRoomById
);

// Route to get rooms by status
router.get(
  "/estado/:estadoId",
  param("estadoId").isNumeric().withMessage("El estadoId debe ser un número"),
  handleInputErrors,
  RoomController.getRoomsByStatus
);

//Route to update room status
router.put(
  "/:id/estado",
  param("id").isNumeric().withMessage("Dato no válido"),
  body("estadoId")
    .trim()
    .isNumeric()
    .withMessage("El estadoId debe ser un número"),
  handleInputErrors,
  RoomController.updateRoomStatus
);


export default router;
