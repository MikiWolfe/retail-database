const path = require("path");
const cors = require("cors");
const express = require("express");
const app = express();
const routes = require('./routes');
const sequelize = require("./config/connection");


app.use(cors());

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () =>
    console.log(`Now listening at http://localhost:${PORT}`)
  );
});
