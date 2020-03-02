"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

var _middlewares = _interopRequireDefault(require("./config/middlewares"));

var _database = require("./config/database");

var app = (0, _express["default"])();
(0, _middlewares["default"])(app);

_database.sequelize.sync().then(function () {
  var port = app.get('port');

  _http["default"].createServer(app).listen(port, function () {
    console.log("Server running at port ".concat(port));
  });
});
//# sourceMappingURL=index.js.map