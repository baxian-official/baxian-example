import assert from 'node:assert/strict';
import test from 'node:test';
import { greet } from './hello.js';

test('greets a name', () => {
  assert.equal(greet('baxian'), 'Hello, baxian!');
});

test('preserves names in different languages', () => {
  assert.equal(greet('小明'), 'Hello, 小明!');
});
