
let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
let db = require('./database/db');
  
// Express Route
const productRoute = require('./routes/product.route')
  
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());
app.use('/product', productRoute)
  
  
// PORT
const PORT = process.env.PORT || 4000;

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