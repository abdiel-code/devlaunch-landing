import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import helmet from "helmet";
import apiRouter from "./routes/api.js";
import corsMiddleware from "./middleware/corsMiddleware.js";

const app = express();

app.use(helmet());
app.use(corsMiddleware);

app.use(express.json());
app.use("/api", apiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
