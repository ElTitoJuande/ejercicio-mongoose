import express from "express";
import _dotenv from "dotenv/config";
import connectDB from "./db/config.js";
import productRoutes from "./routes/productRoutes.js";
import errorHandler from "./middlewares/errorMiddleware.js";

const app = express();
app.use(express.json()); // Para convertir el cuerpo de la solicitud en JSON

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Manejo de errores después de TODAS las rutas
app.use(errorHandler);

const PORT = process.env.PORT;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();

export default app;
