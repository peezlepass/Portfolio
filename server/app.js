require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const path = require("path");

const session = require("express-session");
const FileStore = require("session-file-store")(session);
const authenticationRouter = require("./routes/authentication");

const app = express();
const { PORT, SECRET } = process.env;
const sessionConfig = {
  name: "portfolio",
  store: new FileStore(),
  secret: SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10,
    httpOnly: true,
  },
};

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", authenticationRouter);

app.listen(PORT, () => console.log(`Server is on ${PORT} port!`));
