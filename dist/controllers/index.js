"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _users = require("./users");

Object.keys(_users).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _users[key];
    }
  });
});

var _tasks = require("./tasks");

Object.keys(_tasks).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tasks[key];
    }
  });
});
//# sourceMappingURL=index.js.map