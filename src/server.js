import express from "express";
import cors from "cors";
import customerRoutes from "./routes/customer.route.js";
import roomRoutes from "./routes/room.route.js";
import reservationRoutes from "./routes/reservation.route.js";


const app = express();
app.use(cors());

app.use(express.json());

app.use("/clientes", customerRoutes);
app.use("/habitaciones", roomRoutes);
app.use("/reservas", reservationRoutes);




export default app;
