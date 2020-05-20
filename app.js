
var express = require('express');
const Sequelize = require('sequelize');
var sosRouter = require('./routes/soscontributions');
var othersRouter = require('./routes/othercontribution');
var PBRouter = require('./routes/PB');
var BCRouter = require('./routes/BC');
var catagoriesRouter = require('./routes/catagories');
var cors = require('cors')
var app = express();
require('./db/connection.js')
// view engine setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*to remove cors error 
 add respose headers which allows browser to allow cors */

app.use(cors())

/* Routing of request patterns */

app.use('/other', othersRouter);
app.use('/sos', sosRouter);
app.use('/PB',PBRouter);
app.use('/BC', BCRouter);
app.use('/catagories', catagoriesRouter);


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

app.listen(3000,(req,res)=>{
	console.log('connected to 3000')
});

module.exports = app;
