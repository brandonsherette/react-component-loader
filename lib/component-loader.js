'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _spinner = require('./spinner');

var _spinner2 = _interopRequireDefault(_spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./component-loader.scss');

var ComponentLoader = function (_Component) {
  _inherits(ComponentLoader, _Component);

  function ComponentLoader() {
    _classCallCheck(this, ComponentLoader);

    return _possibleConstructorReturn(this, (ComponentLoader.__proto__ || Object.getPrototypeOf(ComponentLoader)).apply(this, arguments));
  }

  _createClass(ComponentLoader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          error = _props.error,
          handleReload = _props.handleReload,
          isLoaded = _props.isLoaded,
          loadingTitle = _props.loadingTitle,
          showContentOnError = _props.showContentOnError;


      if (error) {
        return _react2.default.createElement(
          'div',
          { className: 'component-loader' },
          _react2.default.createElement(
            'div',
            { className: 'alert alert-danger text-center' },
            _react2.default.createElement(
              'div',
              null,
              error
            ),
            handleReload && _react2.default.createElement(
              'div',
              { className: 'btn-reload-wrapper' },
              _react2.default.createElement(
                'button',
                { type: 'button', className: 'btn btn-primary', onClick: handleReload },
                _react2.default.createElement('i', { className: 'fa fa-refresh' }),
                '\xA0Retry'
              )
            )
          ),
          showContentOnError && _react2.default.createElement(
            'div',
            null,
            children
          )
        );
      }

      if (!isLoaded) {
        return _react2.default.createElement(
          'div',
          { className: 'component-loader' },
          _react2.default.createElement(_spinner2.default, { title: loadingTitle })
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'component-loader' },
        children
      );
    }
  }]);

  return ComponentLoader;
}(_react.Component);

ComponentLoader.propTypes = {
  error: _propTypes2.default.any,
  handleReload: _propTypes2.default.func,
  isLoaded: _propTypes2.default.bool.isRequired,
  loadingTitle: _propTypes2.default.string,
  showContentOnError: _propTypes2.default.bool
};

ComponentLoader.defaultProps = {
  error: null,
  handleReload: null,
  loadingTitle: null,
  showContentOnError: false
};

exports.default = ComponentLoader;