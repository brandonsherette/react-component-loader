'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spinner = function Spinner(_ref) {
  var title = _ref.title;
  return _react2.default.createElement(
    'div',
    { className: 'spinner-wrapper text-center' },
    _react2.default.createElement(
      'div',
      { className: 'spinner' },
      _react2.default.createElement(
        'div',
        { className: 'spinner-icon' },
        _react2.default.createElement('i', { className: 'fa fa-spinner fa-spin fa-3x fa-fw' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'loading-title' },
        title
      )
    )
  );
};

Spinner.propTypes = {
  title: _propTypes2.default.string
};

Spinner.defaultProps = {
  title: ''
};

exports.default = Spinner;