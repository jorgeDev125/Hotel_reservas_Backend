import express from "express";

import cors from "cors";

import customersRoutes from "./routes/customer.route.js";







const app = express();
app.use(cors());


app.use(express.json());

app.use("/clientes", customersRoutes);
//app.use("/reservas", reservesRoutes);




export default app;
