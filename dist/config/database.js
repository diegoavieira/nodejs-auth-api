"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Sequelize", {
  enumerable: true,
  get: function get() {
    return _sequelize["default"];
  }
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _env = _interopRequireDefault(require("./env"));

var sequelize = new _sequelize["default"](_env["default"].database_url);
exports.sequelize = sequelize;
//# sourceMappingURL=database.js.map