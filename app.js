const express = require("express");
const app = express();
const connect = require("./db/conn");

require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/tasks", require("./routes/tasks"));

async function startServer() {
  try {
    await connect(process.env.MONGO_URI);
    app.listen(port, () => console.log(`server listening on ${port}`));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

startServer();
