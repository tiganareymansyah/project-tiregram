import dotenv from "dotenv";
dotenv.config();

import { client } from "../postgresql.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function loginUser(req, res) {
  const cekEmail = await client.query(
    `SELECT * FROM user_data WHERE email = '${req.body.email}'`
  );
  if (cekEmail.rows.length > 0) {
    if (await bcrypt.compare(req.body.password, cekEmail.rows[0].password)) {
      const token = jwt.sign(cekEmail.rows[0], process.env.JWT_SECRET_KEY);
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
      });
      res.send("Login berhasil");
    } else {
      res.status(401);
      res.send("Password salah");
    }
  } else {
    res.status(401);
    res.send("Username salah");
  }
}

export async function registerUser(req, res) {
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(req.body.regPassword, salt);
  await client.query(
    `INSERT INTO user_data (username, gender, email, password) VALUES ('${req.body.regUsername}', '${req.body.regGender}', '${req.body.regEmail}', '${hash}')`
  );
  res.send("Register berhasil");
}

export async function postinganUser(req, res) {
  await client.query(
    `INSERT INTO post_user (captions_post, images_post, id_user) VALUES ('${req.body.caption}', '${req.file.filename}', '${req.userLogin.id_user}')
    `
  );
  res.send("Postingan berhasil");
}

export async function changePpUser(req, res) {
  await client.query(
    `UPDATE user_data set profil_img = '${req.file.filename}' WHERE id_user = ${req.userLogin.id_user}`
  );
  res.send("Profil berhasil diubah");
}

export async function tampilPp(req, res) {
  const tampilProfil = await client.query(
    `SELECT profil_img from user_data WHERE id_user = ${req.userLogin.id_user}`
  );
  res.send(tampilProfil.rows[0]);
}

export async function logoutUser(_req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.clearCookie("token");
  res.send("Logout berhasil");
}
