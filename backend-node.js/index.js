import express from "express";
import {
  loginUser,
  logoutUser,
  postinganUser,
  registerUser,
  tampilData,
} from "./routes/tiregram-route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express();

const uploadPost = multer({ dest: "public/img-post" });
const uploadProfil = multer({ dest: "public/img-profil" });

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
app.post("/api/postinganuser", uploadPost.single("img-post"), postinganUser);
app.get("/api/logoutuser", logoutUser);

app.listen(3000, () => console.log("Server berjalan..."));
