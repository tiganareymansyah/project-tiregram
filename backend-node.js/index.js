import express from "express";
import {
  loginUser,
  registerUser,
  tampilData,
} from "./routes/tiregram-route.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));

app.get("/api/tampildata", tampilData);
app.post("/api/login", loginUser);
app.post("/api/register", registerUser);

app.listen(3000, () => console.log("Server berjalan..."));
