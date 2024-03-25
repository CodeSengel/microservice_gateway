const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");

const dotenv = require("dotenv"); // Importez dotenv
dotenv.config(); // Chargez les variables d'environnement à partir du fichier .env
const gatewayRoutes = require("../routes/gatewayRoutes");

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

app.use("/.netlify/functions/api/", gatewayRoutes);
module.exports.handler = serverless(app);
