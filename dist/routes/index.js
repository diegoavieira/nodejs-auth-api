"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _users = _interopRequireDefault(require("./users"));

var _tasks = _interopRequireDefault(require("./tasks"));

var router = require('express').Router();

router.use('/users', _users["default"]);
router.use('/tasks', _tasks["default"]);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=index.js.map