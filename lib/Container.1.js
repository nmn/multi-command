'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Container;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var stylesheet = {
  bordered: {
    border: {
      type: 'line'
    },
    style: {
      border: {
        fg: 'blue'
      }
    }
  }
};

function Container(_ref) {
  var children = _ref.children;

  return _react2['default'].createElement(
    'element',
    null,
    _react2['default'].createElement(
      'box',
      {
        'class': stylesheet.bordered,
        width: '100%',
        height: '100%',
        draggable: false
      },
      children
    )
  );
}

module.exports = exports['default'];