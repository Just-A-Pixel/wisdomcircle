require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors())

const auth = require("./routes/auth")

app.use("/api/auth", auth)

app.get("/", (req, res) => {
  console.log(req);
  res.json({ message: "connected" });
});

app.listen(process.env.PORT || port, () => {
  console.log(`Server listening on http://localhost:${process.env.PORT}`);
});
