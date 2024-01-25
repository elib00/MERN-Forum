import express from "express";
import mongoose from "mongoose";
import UserRouter from "./routes/usersRoute.js";
import { PORT, mongodbURL } from "./config.js";
import cors from "cors";

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
}));

//middleware for parsing request body
app.use(express.json());

app.use("/api/users", UserRouter);

//connnect to mongodb
mongoose
    .connect(mongodbURL)
    .then(() => {
        console.log("Connection established");
        app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });