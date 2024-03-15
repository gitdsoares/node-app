const express = require('express');
const app = express();
const router = express.Router();
const winston = require('winston');

const path = __dirname + '/src/views/';
const port = 8080;

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console()
  ]
});

router.use(function (req, res, next) {
  logger.info('/' + req.method);
  next();
});

router.get('/', function (req, res) {
  res.sendFile(path + 'index.html');
});

router.get('/sharks', function (req, res) {
  res.sendFile(path + 'sharks.html');
});

app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
  logger.info('Node.js app listening on port ' + port + '!');
});

module.exports = app;
