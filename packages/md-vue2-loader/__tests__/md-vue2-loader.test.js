'use strict';

const mdVue2Loader = require('..');
const assert = require('assert').strict;

assert.strictEqual(mdVue2Loader(), 'Hello from mdVue2Loader');
console.info('mdVue2Loader tests passed');
