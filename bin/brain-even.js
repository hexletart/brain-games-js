#!/usr/bin/env node
import greeting from '../src/cli.js';
import checkEven from '../src/is-even.js';

checkEven(greeting());
