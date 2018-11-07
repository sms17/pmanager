var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');


//Adding NodeJS routing...
const usersRouter = require('./routes/users');
const projectRouter = require('./routes/projects');
const taskRouter = require('./routes/tasks');
const parentRouter = require('./routes/parents');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/pmdb').then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/",express.static('public/project-manager'));


app.use('/', projectRouter);
app.use('/users', usersRouter);
app.use('/projects', projectRouter);
app.use('/tasks', taskRouter);
app.use('/parents', parentRouter);

const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
console.log('Listening on port ' + port);
});


module.exports = app;


