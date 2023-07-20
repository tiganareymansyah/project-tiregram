import { client } from "../postgresql.js";

export async function tampilData(_req, res) {
    const data = await client.query("SELECT * FROM user_data");
    res.send(data.rows);
}

export async function loginUser(req, res) {
    const cekUsername = await client.query(
        `SELECT * FROM user_data WHERE username = '${req.body.username}'`
    );
    if(cekUsername.rows.length > 0) {
        if(req.body.password === cekUsername.rows[0].password) {
            res.send("Login berhasil");
        }
        else {
            res.status(401);
            res.send("Password salah");
        }
    }
    else {
        res.status(401);
        res.send("Username salah");
    }
}