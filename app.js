var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connection = require('./config/mysqlConnection');

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    //console.log('Conectou');
    logger.info("Teste");
  });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tasksRouter = require('./routes/tasks');

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/tasks", tasksRouter);

module.exports = app;