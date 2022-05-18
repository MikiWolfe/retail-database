const path = require('path')
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('./database/db');
  
// Express Route
const productRoute = require('./routes/product.route')
const app = express();

// PORT
const PORT = process.env.PORT || 4000;  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());
app.use('/product', productRoute)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/",(req,res) => { 
    res.sendFile(path.join(__dirname + "/client/build/index.html")) 
})  


db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});

// 404 Error
app.use((req, res, next) => {
  res.status(404).send('Error 404!')
});
  
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

