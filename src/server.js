import express from "express";
import customersRoutes from "./routes/customer.route.js";







const app = express();

app.use(express.json());

app.use("/clientes", customersRoutes);




export default app;
