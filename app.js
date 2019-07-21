const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//FIXME шедулер вынести в отдельный сервис
const cron = require('./common/cron');
const dota2Router = require('./routes/dota2Router');

const app = express();
cron.schedule();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', dota2Router);

module.exports = app;
