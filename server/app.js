const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');

const { loadConfig } = require('./config/app');
const db = require('./models/db');
const cfg = loadConfig(`${__dirname}/config.json`);

const app = express();
init().then(() => {
  const mainRouter = require('./routes/index');
  const userRouter = require('./routes/users');
  const users = require('./models/user');
  users.setSecret(cfg.secret);
  require('./config/passport');

  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'hbs');

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  app.use('/', mainRouter);
  app.use('/users', userRouter);

  app.use(passport.initialize());

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
})


module.exports = app;

async function init() {
  try {
    await db.connect(cfg.db);
    console.log('Connected to DB');
  } catch (err) {
    console.error(`Failed to connect to DB - ${err}`);
    process.exit(1);
  }
}