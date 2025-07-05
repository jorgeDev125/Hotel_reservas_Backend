import { connection } from "../config/db.js";

export class RoomController {

  static getRooms = async (req, res) => {
    const query = 'SELECT * FROM get_rooms';
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
        connection.query(query, [habitacionId],  (err, results) => {
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
        connection.query(query, [estadoId],  (err, results) => {
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

}
