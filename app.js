const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

const indexRouter = require('./routes/index');
const pizzaRouter = require('./routes/pizza');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', indexRouter);
app.use('/pizza', pizzaRouter);

app.listen(port, () => {
  console.log(`Сервер запущено на порту ${port}`);
});