"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tasks = exports.Users = void 0;

var _path = _interopRequireDefault(require("path"));

var _database = require("../config/database");

var Users = _database.sequelize["import"](_path["default"].join(__dirname, 'users'));

exports.Users = Users;

var Tasks = _database.sequelize["import"](_path["default"].join(__dirname, 'tasks'));

exports.Tasks = Tasks;
//# sourceMappingURL=index.js.map