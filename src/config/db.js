import mysql from "mysql2";

export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hotel_db",
});

connection.connect(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("Conectado a la Base de Datos")
    }
})
