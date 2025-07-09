import { connection } from "../config/db.js";

export class CustomerController {
  static createCustomer = async (req, res) => {
    const { cedula, nombre, apellido, email, telefono } = req.body;
    const query =
      "INSERT INTO clientes (cedula, nombre, apellido, email, telefono) VALUES ($1, $2, $3, $4, $5)";
    const values = [cedula, nombre, apellido, email, telefono];
    try {
      // Verifica si ya existe un cliente con la misma cédula
      const userExists = await new Promise((resolve, reject) => {
        const queryCedula = "SELECT * FROM clientes WHERE cedula = $1";
        connection.query(queryCedula, [cedula], (err, results) => {
          if (err) return reject(err);
          resolve(results.rows.length > 0);
        });
      });

      if (userExists) {
        return res.status(409).json({ error: "El Cliente ya está registrado" });
      }

      // Inserta el nuevo cliente en la base de datos
      await new Promise((resolve, reject) => {
        connection.query(query, values, (err, result) => {
          if (err) return reject(err);
          resolve(result.rows);
        });
      });

      res.status(201).json({ message: "Cliente creado correctamente" });
    } catch (error) {
      res.status(500).json({ error: "Hubo un error al crear el cliente" });
    }
  };

  static getCustomers = async (req, res) => {
    const query = "SELECT * FROM clientes ORDER BY nombre ASC";
    try {
      const customers = await new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
          if (err) return reject(err);
          resolve(results.rows);
        });
      });
      // Check if there are no customers
      if (customers.length === 0) {
        res.status(200).json({ message: "No hay clientes registrados" });
        return;
      }
      // Return the list of customers
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json({ error: "Hubo un error" });
    }
  };

  static getCustomerByCedula = async (req, res) => {
    const { cedula } = req.params;
    const query = "SELECT * FROM clientes WHERE cedula = $1";
    try {
      const customer = await new Promise((resolve, reject) => {
        connection.query(query, [cedula], (err, results) => {
          if (err) return reject(err);
          resolve(results.rows);
        });
      });
      // Check if the customer exists
      if (!customer || customer.length === 0) {
        return res.status(404).json({ error: "El Cliente no existe" });
      }
      // Return the customer data (puedes devolver solo el primero si la cédula es única)
      res.status(200).json(customer[0]);
    } catch (error) {
      res.status(500).json({ error: "Hubo un error" });
    }
  };

  static updateCustomer = async (req, res) => {
    const { cedula } = req.params;
    const { cedula: newCedula, nombre, apellido, email, telefono } = req.body;

    const query = `
                    UPDATE clientes
                    SET cedula = $1, nombre = $2, apellido = $3, email = $4, telefono = $5
                    WHERE cedula = $6
                    RETURNING *;
                  `;

    try {
      const updatedCustomer = await new Promise((resolve, reject) => {
        connection.query(
          query,
          [newCedula, nombre, apellido, email, telefono, cedula],
          (err, results) => {
            if (err) return reject(err);
            resolve(results.rows);
          }
        );
      });

      // Si no se actualizó ningún cliente, es porque no existe
      if (!updatedCustomer || updatedCustomer.length === 0) {
        return res.status(404).json({ error: "El Cliente no existe" });
      }

      res.status(200).json({
        message: "Cliente actualizado correctamente",
        customer: updatedCustomer[0],
      });
    } catch (error) {
      res.status(500).json({ error: "Hubo un error al actualizar el cliente" });
    }
  };
}
