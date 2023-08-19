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

// Route home

export async function saranTeman(req, res) {
  const saranTeman = await client.query(
    `SELECT username, profil_img FROM user_data WHERE id_user != ${req.userLogin.id_user}`
  );
  res.send(saranTeman.rows);
}

export async function tampilPost(_req, res) {
  const tampilPost = await client.query(
    `SELECT u.username, profil_img, p.captions_post, images_post FROM user_data u, post_user p WHERE u.id_user = p.id_user`
  );
  res.send(tampilPost.rows);
}

// Route chat

// Route posting

export async function postinganUser(req, res) {
  await client.query(
    `INSERT INTO post_user (captions_post, images_post, id_user) VALUES ('${req.body.caption}', '${req.file.filename}', '${req.userLogin.id_user}')
    `
  );
  res.send("Postingan berhasil");
}

// Route profil

export async function user(req, res) {
  const user = await client.query(
    `SELECT * from user_data WHERE id_user = ${req.userLogin.id_user}`
  );
  res.send(user.rows[0]);
}

export async function changePpUser(req, res) {
  await client.query(
    `UPDATE user_data set profil_img = '${req.file.filename}' WHERE id_user = ${req.userLogin.id_user}`
  );
  res.send("Profil berhasil diubah");
}

export async function editProfile(req, res) {
  await client.query(
    `UPDATE user_data SET username = '${req.body.username}', bio = '${req.body.bio}' WHERE id_user = ${req.userLogin.id_user}`
  );
  res.send("Bio telah diperbarui");
}

export async function editAccount(req, res) {
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(req.body.newPassword, salt);
  await client.query(
    `UPDATE user_data SET username = '${req.body.newUsername}', gender = '${req.body.newGender}', email = '${req.body.newEmail}', password = '${hash}' WHERE id_user = ${req.userLogin.id_user}`
  );
  res.setHeader("Cache-Control", "no-store");
  res.clearCookie("token");
  res.send("Akun diperbarui silahkan login kembali");
}

export async function deleteAccountUser(req, res) {
  await client.query(
    `DELETE FROM user_data WHERE id_user = ${req.userLogin.id_user}`
  );
  res.setHeader("Cache-Control", "no-store");
  res.clearCookie("token");
  res.send("Akun berhasil dihapus");
}

export async function tampilPostProfil(req, res) {
  const tampilPostProfil = await client.query(
    `SELECT * FROM post_user WHERE id_user = ${req.userLogin.id_user}`
  );
  res.send(tampilPostProfil.rows[0]);
}

// Route logout

export async function logoutUser(_req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.clearCookie("token");
  res.send("Logout berhasil");
}
