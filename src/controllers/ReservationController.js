import { connection } from "../config/db.js";

export class ReservationController {
  static createReservation = async (req, res) => {
    const { habitacionId, numeroNoches, clienteId } = req.body;
    const query =
      "INSERT INTO `reserva`(`habitacion_id`, `numero_noches`, `cliente_id`) VALUES (?, ?, ?)";
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
    const { id } = req.params;
    const query = `
    SELECT
      r.id AS id_reserva,
      r.numero_noches AS numero_noches,
      r.precio_reserva AS precio_reserva,
      r.fecha_registro AS fecha_registro,
      h.numero AS numero_habitacion,
      h.categoria AS categoria,
      h.precio AS precio_habitacion,
      eh.estado AS estado_habitacion,
      er.estado AS estado_reserva,
      c.nombre AS nombre_cliente,
      c.apellido AS apellido_cliente,
      c.cedula AS cedula,
      c.telefono AS telefono_cliente,
      c.email AS email_cliente
    FROM
      hotel_db.reserva r
      JOIN hotel_db.habitacion h ON r.habitacion_id = h.id
      JOIN hotel_db.estado_habitacion eh ON h.estado_id = eh.id
      JOIN hotel_db.estado_reserva er ON r.estado_id = er.id
      JOIN hotel_db.clientes c ON r.cliente_id = c.id
    WHERE
      r.id = ${id}
    LIMIT 1
  `;

    try {
      const reservations = await new Promise((resolve, reject) => {
        connection.query(query, [id], (err, results) => {
          if (err) return reject(err);
          resolve(results);
        });
      });

      if (reservations.length === 0) {
        return res.status(404).json({ message: "Reservación no encontrada" });
      }

      // Devuelve el primer (y único) resultado
      res.status(200).json(reservations[0]);
    } catch (error) {
      res.status(500).json({ error: "Hubo un error al buscar la reservación" });
    }
  };

  static updateReservationStatus = async (req, res) => {
    const { id } = req.params; // ID de la reserva a actualizar
    const { estadoId } = req.body; // Nuevo estado_id

    const query = "UPDATE reserva SET estado_id = ? WHERE id = ?";
    try {
      const result = await new Promise((resolve, reject) => {
        connection.query(query, [estadoId, id], (err, result) => {
          if (err) return reject(err);
          resolve(result);
        });
      });
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Reservación no encontrada" });
      }
      res.status(200).json({
        message: "Estado de la reservación actualizado correctamente",
      });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error al actualizar el estado de la reservación" });
    }
  };

  static getReservationsGroupedByStatus = async (req, res) => {
    // Consulta SQL para agrupar reservas por estado
    const query = `
    SELECT 
      er.estado AS nombre_estado,
      er.id AS estado_id,
      COUNT(r.id) AS cantidad
    FROM 
      estado_reserva er
    LEFT JOIN 
      reserva r ON r.estado_id = er.id
    GROUP BY 
      er.id, er.estado
    ORDER BY 
      er.id;
    `;
    try {
      const reservationsGrouped = await new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
          if (err) return reject(err);
          resolve(results);
        });
      });

      if (!reservationsGrouped.length) {
        return res.status(200).json([]);
      }

      res.status(200).json(reservationsGrouped);
    } catch (error) {
      res.status(500).json({
        error:
          "Hubo un error al obtener las reservaciones agrupadas por estado",
      });
    }
  };
}
