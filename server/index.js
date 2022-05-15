const path = require("path");
const express = require("express");
const app = express();

const sequelize = require("./config/connections");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 3001;
app.use(routes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Now listening at http://localhost:${PORT}`)
  );
});
