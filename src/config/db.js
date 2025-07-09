import { Pool } from "pg";
import dotenv from "dotenv"
dotenv.config()

export const connection = new Pool({
  user: process.env.DATABASE_USER, 
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD, 
  port: process.env.DATABASE_PORT,
  ssl: { rejectUnauthorized: false }
});

connection.connect(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("Conectado a la Base de Datos")
    }
})