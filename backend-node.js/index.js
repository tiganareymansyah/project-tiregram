import express from "express";
import {
  changePpUser,
  deleteAccountUser,
  editAccount,
  editProfile,
  loginUser,
  logoutUser,
  postinganUser,
  registerUser,
  tampilPostProfil,
  user,
} from "./routes/tiregram-route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
import jwt from "jsonwebtoken";

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

// Route login  dan regis harus di atas middleware yang login saat ini
app.post("/api/login", loginUser);
app.post("/api/register", registerUser);

// Middleware untuk yang login saat ini
app.use((req, _res, next) => {
  req.userLogin = jwt.verify(req.cookies.token, process.env.JWT_SECRET_KEY);
  next();
});

// Route
app.post("/api/postinganuser", uploadPost.single("img-post"), postinganUser);
app.get("/api/user", user);
app.put("/api/changeppuser", uploadProfil.single("profil"), changePpUser);
app.put("/api/user", editProfile);
app.put("/api/editaccount", editAccount);
app.delete("/api/deleteakun", deleteAccountUser);
app.get("/api/tampilpostuser", tampilPostProfil);
app.get("/api/logoutuser", logoutUser);

app.listen(3000, () => console.log("Server berjalan..."));
