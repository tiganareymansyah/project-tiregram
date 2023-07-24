import dotenv from "dotenv";
dotenv.config();

import { client } from "../postgresql.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function tampilData(req, res) {
  const userLogin = jwt.verify(req.cookies.token, process.env.JWT_SECRET_KEY);
  const tampilUserPp = await client.query(
    `SELECT username, url_images FROM user_data WHERE id = ${userLogin.id}`
  );
  res.send(tampilUserPp.rows[0]);
}

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
