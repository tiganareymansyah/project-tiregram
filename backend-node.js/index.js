import express from "express";
import { tampilData } from "./routes/tiregram-route.js";

const app = express();

app.get("/api/tampildata", tampilData);

app.listen(3000, () => console.log("Server berjalan..."));