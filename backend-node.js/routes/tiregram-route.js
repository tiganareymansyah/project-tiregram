import { client } from "../postgresql.js";

export async function tampilData(_req, res) {
    const data = await client.query("SELECT * FROM user_data");
    res.json(data.rows);
}
