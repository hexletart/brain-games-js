#!/usr/bin/env node
import greeting from '../src/cli.js';
import checkParity from '../src/is-even.js';

checkParity(greeting());
