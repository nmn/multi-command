'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _child_process = require('child_process');

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

var Box = (function (_Component) {
  _inherits(Box, _Component);

  function Box() {
    _classCallCheck(this, Box);

    _get(Object.getPrototypeOf(Box.prototype), 'constructor', this).call(this);
    this.state = {
      text: ''
    };
  }

  _createClass(Box, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this = this;

      var commandWithoutQuotes = this.props.command.replace(/^"/, '').replace(/"$/, '').split(' ');
      var commandName = commandWithoutQuotes.shift();
      var cmd = (0, _child_process.spawn)(commandName, commandWithoutQuotes, {
        cwd: process.cwd()
      });

      cmd.stdout.on('data', function (data) {
        return _this.setState(function (_ref) {
          var text = _ref.text;
          return { text: text + data };
        });
      });
      cmd.stderr.on('data', function (data) {
        return _this.setState(function (_ref2) {
          var text = _ref2.text;
          return { text: text + data };
        });
      });
      cmd.on('close', function () {
        return _this.setState(function (_ref3) {
          var text = _ref3.text;
          return { text: text + '\n DONE!' };
        });
      });

      setInterval(this.scrollToBottom.bind(this), 1000);
    }
  }, {
    key: 'scrollToBottom',
    value: function scrollToBottom() {
      this.refs.myBox.scrollTo(this.state.text.split('\n').length * 5);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'log',
        {
          ref: 'myBox',
          'class': stylesheet.bordered,
          width: this.props.width + '%',
          height: '100%',
          left: this.props.left + '%',
          draggable: false,
          scrollable: true,
          label: this.props.command.replace(/^"/, '').replace(/"$/, '')
        },
        this.state.text
      );
    }
  }]);

  return Box;
})(_react.Component);

exports['default'] = Box;
module.exports = exports['default'];