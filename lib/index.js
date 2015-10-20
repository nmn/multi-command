'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _blessed = require('blessed');

var _blessed2 = _interopRequireDefault(_blessed);

var _reactBlessed = require('react-blessed');

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

var screen = _blessed2['default'].screen({
  autoPadding: true,
  smartCSR: true,
  title: 'react-blessed dashboard'
});

screen.key(['escape', 'q', 'C-c'], function (ch, key) {
  return process.exit(0);
});

var usefulArgs = process.argv.slice(process.argv.indexOf('--') + 1);

(0, _reactBlessed.render)(_react2['default'].createElement(_Container2['default'], { commands: usefulArgs }), screen);