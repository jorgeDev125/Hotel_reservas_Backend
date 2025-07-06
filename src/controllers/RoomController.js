import { connection } from "../config/db.js";

export class RoomController {
  static getRooms = async (req, res) => {
    const query = "SELECT * FROM get_rooms";
    try {
      const rooms = await new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
          if (err) return reject(err);
          resolve(results);
        });
      });
      // Check if there are no rooms
      if (rooms.length === 0) {
        res.status(200).json({ message: "No hay habitaciones registradas" });
        return;
      }
      // Return the list of rooms
      res.status(200).json(rooms);
    } catch (error) {
      res.status(500).json({ error: "Hubo un error" });
    }
  };

  static getRoomById = async (req, res) => {
    const { habitacionId } = req.params;

    const query = `SELECT * FROM habitacion WHERE id = ${habitacionId};`;
    try {
      const room = await new Promise((resolve, reject) => {
        connection.query(query, [habitacionId], (err, results) => {
          if (err) return reject(err);
          resolve(results);
        });
      });
      // Check if there are no rooms
      if (room.length === 0) {
        res.status(200).json({ message: "No hay habitaciones con ese Id" });
        return;
      }
      // Return the list of rooms
      res.status(200).json(room);
    } catch (error) {
      res.status(500).json({ error: "Hubo un error" });
    }
  };

  static getRoomsByStatus = async (req, res) => {
    const { estadoId } = req.params;

    const query = `SELECT 
                      h.id AS habitacion_id,
                      h.numero AS numero,
                      h.categoria AS categoria,
                      h.precio AS precio
                    FROM 
                      hotel_db.habitacion h
                    JOIN 
                      hotel_db.estado_habitacion eh ON h.estado_id = eh.id
                    WHERE 
                      eh.id = ?;`;
    try {
      const rooms = await new Promise((resolve, reject) => {
        connection.query(query, [estadoId], (err, results) => {
          if (err) return reject(err);
          resolve(results);
        });
      });
      // Check if there are no rooms
      if (rooms.length === 0) {
        res.status(200).json({ message: "No hay habitaciones con ese estado" });
        return;
      }
      // Return the list of rooms
      res.status(200).json(rooms);
    } catch (error) {
      res.status(500).json({ error: "Hubo un error" });
    }
  };

  static updateRoomStatus = async (req, res) => {
    const { id } = req.params;
    const { estadoId } = req.body;

    if (!estadoId) {
      return res.status(400).json({ error: "estadoId es requerido" });
    }

    const query = "UPDATE habitacion SET estado_id = ? WHERE id = ?";
    try {
      const result = await new Promise((resolve, reject) => {
        connection.query(query, [estadoId, id], (err, result) => {
          if (err) return reject(err);
          resolve(result);
        });
      });
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Habitación no encontrada" });
      }
      res
        .status(200)
        .json({ message: "Estado de la habitación actualizado correctamente" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Error al actualizar el estado de la habitación" });
    }
  };

  static getRoomsGroupedByStatus = async (req, res) => {
    // Incluye el nombre del estado en la consulta
    const query = `
    SELECT 
      eh.estado AS nombre_estado,
      eh.id AS estado_id,
      COUNT(h.id) AS cantidad
    FROM 
      estado_habitacion eh
    LEFT JOIN 
      habitacion h ON h.estado_id = eh.id
    GROUP BY 
      eh.id, eh.estado
    ORDER BY 
      eh.id;
   `;
    try {
      const roomsGrouped = await new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
          if (err) return reject(err);
          resolve(results);
        });
      });

      // Si no hay habitaciones, responde con un array vacío
      if (!roomsGrouped.length) {
        return res.status(200).json([]);
      }

      // Devuelve los datos agrupados
      res.status(200).json(roomsGrouped);
    } catch (error) {
      res.status(500).json({
        error: "Hubo un error al obtener las habitaciones agrupadas por estado",
      });
    }
  };
}
