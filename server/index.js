require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

const session = require("express-session");
const FileStore = require("session-file-store")(session);
const authenticationRouter = require("./routes/authentication");

const app = express();
const { PORT, SESSION_SECRET } = process.env;
const sessionConfig = {
  name: "portfolio",
  store: new FileStore(),
  secret: SESSION_SECRET,
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
// Credentials: true - allows cookies
// An origin function allows us to have a dynamic origin value instead of the default
// * wild card
// This is necessary because browsers block * when credentials are allowed.
app.use(
  cors({
    credentials: true,
    origin(origin, callback) {
      callback(null, true);
    },
  })
);
app.use(session(sessionConfig));

app.use("/", authenticationRouter);

app.listen(PORT, () => console.log(`Server is on ${PORT} port!`));
