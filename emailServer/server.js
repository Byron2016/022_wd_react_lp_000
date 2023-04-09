//1.15.00
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// server used to send send emails
const app = express();

// settings
app.set("port", process.env.PORT || 5000);
// app.set("EMAIL_USER", process.env.EMAIL_USER || 5002);
// app.set("EMAIL_PASS", process.env.EMAIL_PASS || 5003);

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// starting the server
app.listen(app.get("port"), () => {
  console.log(`Server Running on port ${app.get("port")}`);
});

// routes
app.use(require("./routes/index"));
