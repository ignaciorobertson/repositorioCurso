var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
var pool = require('./models/bd');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


    //CONSULTAS DE PRUEBA A LA BASE DE DATOS//

//INSERT A LA BASE DE DATOS

// var obj = { 
//   nombre: 'Juan',
//   apellido: 'López',
//   trabajo: 'Docente',
//   edad: 38,
//   salario: 1500000,
//   mail: 'juanlopez@gmail.com'
// };
// pool.query('insert into empleados set ?', [obj]).then(function(resultados){
//   console.log(resultados);
// });


//MODIFICAR DATOS DE LA BASE DE DATOS

// var id = 6;
// var obj = { 
//   nombre: 'Juan',
//   apellido: 'Pérez Company',
//   trabajo: 'Asesor',
//   edad: 39,
//   salario: 1600000,
//   mail: 'juanperezcompany@gmail.com'
// };
// pool.query('update empleados set ? where id_emp = ?',[obj, id]).then(function(resultados){
//   console.log(resultados);
// });

// select de prueba a la base de datos

//DELETE A LA BASE DE DATOS

var id = 22;
pool.query('delete from empleados where id_emp = ?',[id]).then(function(resultados){
  console.log(resultados);
});


// SELECT A LA BASE DE DATOS

console.log('SELECT DE PRUEBA');
pool.query('select nombre,edad from empleados where nombre = "Juan" and edad = 38').then(function(resultados){
  console.log(resultados);
});



//END QUERIES//

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
