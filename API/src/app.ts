import express, { Application } from "express";
import morgan from "morgan";
import path from "path";
import cors from "cors";

import indexRoutes from "./routes/index";

const app: Application = express();

//settings
app.set("port", process.env.PORT || 4000);

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//routes
app.use("/api", indexRoutes);

//Store Public Files
app.use("/uploads", express.static(path.resolve("uploads")));

export default app;
