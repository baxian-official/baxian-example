import assert from 'node:assert/strict';
import test from 'node:test';
import { greet } from './hello.js';

test('greets a name', () => {
  assert.equal(greet('baxian'), 'Hello, baxian!');
});

test('preserves names in different languages', () => {
  assert.equal(greet('小明'), 'Hello, 小明!');
});

test('uses the default greeting for an empty name', () => {
  assert.equal(greet(''), 'Hello, World!');
});

test('does not treat whitespace as empty', () => {
  assert.equal(greet('   '), 'Hello,    !');
});
