import express from "express";
import { loginUser, tampilData } from "./routes/tiregram-route.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/tampildata", tampilData);
app.post("/api/login", loginUser);

app.listen(3000, () => console.log("Server berjalan..."));