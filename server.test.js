import assert from 'node:assert/strict';
import { once } from 'node:events';
import test from 'node:test';
import { createDemoServer } from './server.js';

test('serves the greeting page and its module', async (t) => {
  const server = createDemoServer();
  t.after(() => new Promise((resolve) => server.close(resolve)));
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  const origin = `http://127.0.0.1:${server.address().port}`;

  const page = await fetch(`${origin}/?demo=1`);
  assert.equal(page.status, 200);
  assert.match(page.headers.get('content-type'), /text\/html/);
  assert.match(await page.text(), /baxian example/);

  const module = await fetch(`${origin}/hello.js`);
  assert.equal(module.status, 200);
  assert.match(module.headers.get('content-type'), /text\/javascript/);
  assert.match(await module.text(), /export function greet/);

  const missing = await fetch(`${origin}/package.json`);
  assert.equal(missing.status, 404);
  assert.equal(await missing.text(), 'Not found');
});
