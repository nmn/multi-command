#!/usr/bin/env node
import React from 'react'
import blessed from 'blessed'
import {render} from 'react-blessed'

import Container from './Container'

const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'react-blessed dashboard'
});

screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

const usefulArgs = process.argv.slice(process.argv.indexOf('--') + 1);

render(<Container commands={usefulArgs} />, screen);
