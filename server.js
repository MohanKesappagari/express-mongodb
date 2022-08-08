import colors from "colors";
import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import noteRoutes from "./routes/noteRoutes.js";
dotenv.config();
const port = process.env.PORT || 5000;
colors.enable();
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/notes", noteRoutes);

app.use(errorHandler);
app.listen(port, () => console.log(`Server started at ${port}`));
