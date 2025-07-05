import { connection } from "../config/db.js";

export class ReservationController {

  static createReservation = async (req, res) => {
    const { habitacionId, numeroNoches, clienteId } = req.body;
    const query = "INSERT INTO `reserva`(`habitacion_id`, `numero_noches`, `cliente_id`) VALUES (?, ?, ?)"
    const values = [habitacionId, numeroNoches, clienteId];
    try {
     
      // Insert the new reservation into the database
      await new Promise((resolve, reject) => {
        connection.query(query, values, (err, result) => {
          if (err) return reject(err);
          resolve(result);
        });
      });
      res.status(201).json({ message: "Reservación creada correctamente" });
    } catch (error) {
      res.status(500).json({ error: "Hubo un error al crear la reserva" });
    }
  };

  static getReservations = async (req, res) => {
    const query = "SELECT * FROM get_reservations";
    try {
      const reservations = await new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
          if (err) return reject(err);
          resolve(results);
        });
      });
      // Check if there are no reservations
      if (reservations.length === 0) {
        res.status(200).json({ message: "No hay reservaciones registradas" });
        return;
      }
      // Return the list of reservations
      res.status(200).json(reservations);
    } catch (error) {
      res.status(500).json({ error: "Hubo un error" });
    }
  };

  static getReservationById = async (req, res) => {
  
  };
  
}
