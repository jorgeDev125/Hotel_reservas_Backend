import express from "express";
import cors from "cors";
import customerRoutes from "./routes/customer.route.js";
import roomRoutes from "./routes/room.route.js";
import reservationRoutes from "./routes/reservation.route.js";
import dotenv from "dotenv"
dotenv.config()

const app = express();

const corsOptions = {
  origin: 'https://hotel-reservas-frontend-n17k.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}
   
app.use(cors(corsOptions));

app.use(express.json());

app.use("/clientes", customerRoutes);
app.use("/habitaciones", roomRoutes);
app.use("/reservas", reservationRoutes);




export default app;
