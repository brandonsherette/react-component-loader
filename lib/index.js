'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = undefined;

var _spinner = require('./spinner');

Object.defineProperty(exports, 'Spinner', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_spinner).default;
  }
});

var _componentLoader = require('./component-loader');

var _componentLoader2 = _interopRequireDefault(_componentLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _componentLoader2.default;