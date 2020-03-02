"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("../routes"));

var _env = _interopRequireDefault(require("./env"));

var _default = function _default(app) {
  app.disable('x-powered-by');
  app.set('port', _env["default"].port);
  app.set('json spaces', 2);
  app.use(_bodyParser["default"].json());
  app.use(_bodyParser["default"].urlencoded({
    extended: false
  }));
  app.use('/api', _routes["default"]);
  app.use('*', function (req, res) {
    res.status(404).json({
      message: "Route ".concat(req.originalUrl, " does not exists.")
    });
  });
  app.use(function (err, req, res) {
    res.status(500).json({
      message: 'Internal server error.'
    });
  });
};

exports["default"] = _default;
//# sourceMappingURL=middlewares.js.map