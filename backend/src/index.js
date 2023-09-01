require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors())

const auth = require("./routes/auth")

app.use("/api/auth", auth)


// pool.query('SELECT * FROM users', (error, results) => {
//   if (error) {
//     throw error
//   }
//   console.log("ok")
// })
// const client = new Client()
// await client.connect()
 
// const res = await client.query('SELECT $1::text as message', ['Hello world!'])
// console.log(res.rows[0].message) // Hello world!
// await client.end()

app.get("/", (req, res) => {
  console.log(req);
  res.json({ message: "connected" });
});

app.listen(process.env.PORT || port, () => {
  console.log(`Server listening on http://localhost:${process.env.PORT}`);
  console.log("Trying to connect to database...");
});
