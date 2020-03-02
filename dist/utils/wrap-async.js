"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapAsync = void 0;

var wrapAsync = function wrapAsync(fn) {
  return function (req, res, next) {
    return fn(req, res, next)["catch"](next);
  };
};

exports.wrapAsync = wrapAsync;
//# sourceMappingURL=wrap-async.js.map