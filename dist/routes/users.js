"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = require("../utils");

var _controllers = require("../controllers");

var router = require('express').Router();

router.route('/').get((0, _utils.wrapAsync)(_controllers.getUsers)).post((0, _utils.wrapAsync)(_controllers.createUser));
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=users.js.map