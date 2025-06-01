const express = require("express");
require("dotenv").config();
const cors = require("cors");          // ← importa cors
const app = express();
const db = require("./models");

// Permitir solicitudes desde http://localhost:5173 (tu front en Vite)
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());
// Rutas
const productRoutes = require("./routes/product.routes");
app.use("/api/products", productRoutes);

// Iniciar servidor y sincronizar DB
const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
});
