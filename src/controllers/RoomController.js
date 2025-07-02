import { connection } from "../config/db.js";

export class RoomController {



  /* static createCustomer = async (req, res) => {
    const { cedula, nombre, apellido, email, telefono } = req.body;
    const query = "INSERT INTO clientes (cedula, nombre, apellido, email, telefono) VALUES (?, ?, ?, ?, ?)";
    const values = [cedula, nombre, apellido, email, telefono];
    try {
      // Check if the user already exists by cedula
      const userExists = await new Promise((resolve, reject) => {
        const queryCedula = "SELECT * FROM clientes WHERE cedula = ?";
        connection.query(queryCedula, [cedula], (err, results) => {
          if (err) return reject(err);
          resolve(results.length > 0);
        });
      });

      if (userExists) {
        const error = new Error("El Cliente ya esta registrado");
        res.status(409).json({ error: error.message });
        return;
      }

      // Insert the new customer into the database
      await new Promise((resolve, reject) => {
        connection.query(query, values, (err, result) => {
          if (err) return reject(err);
          resolve(result);
        });
      });
      res.status(201).json({ message: "Cliente creado correctamente" });
    } catch (error) {
      res.status(500).json({ error: "Hubo un error al crear el cliente" });
    }
  }; */

  static getRooms = async (req, res) => {
    const query = `SELECT * FROM get_rooms`;
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

 /*  static getUCustomerByCedula = async (req, res) => {
    const { cedula } = req.params;
    const query = "SELECT * FROM clientes WHERE cedula = ?";
    try {
      const customer = await new Promise((resolve, reject) => {
        connection.query(query, [cedula], (err, results) => {
          if (err) return reject(err);
          resolve(results);
        });
      });
      // Check if the customer exists
      if (customer.length === 0) {
        const error = new Error("El Cliente no existe");
        res.status(409).json({ error: error.message });
        return;
      }
      // Return the customer data
      res.status(200).json(customer);
    } catch (error) {
      res.status(500).json({ error: "Hubo un error" });
    }
  }; */

  /* static updateCustomer = async (req, res) => {
    const { cedula } = req.params;
    const query = "UPDATE clientes SET cedula = ?, nombre = ?, apellido = ?, email = ?, telefono = ? WHERE cedula = ?";
    try {
      const customer = await new Promise((resolve, reject) => {
        connection.query(query, [req.body.cedula, req.body.nombre, req.body.apellido, req.body.email, req.body.telefono, cedula], (err, results) => {
          if (err) return reject(err);
          resolve(results);
        });
      });
      // Check if the customer exists
      if (customer.length === 0) {
        const error = new Error("El Cliente no existe");
        res.status(409).json({ error: error.message });
        return;
      }
      // Return the customer data
      res.status(201).json({ message: "Cliente actualizado correctamente" });
    } catch (error) {
      res.status(500).json({ error: "Hubo un error al crear el cliente" });
    }
  }; */
}
