import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const pages = new Map([
  ['/', ['text/html; charset=utf-8', readFileSync(new URL('./index.html', import.meta.url))]],
  ['/hello.js', ['text/javascript; charset=utf-8', readFileSync(new URL('./hello.js', import.meta.url))]],
]);

export function createDemoServer() {
  return createServer((request, response) => {
    const page = pages.get(request.url.split('?')[0]);
    if (!page) {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Not found');
      return;
    }
    response.writeHead(200, { 'Content-Type': page[0] });
    response.end(page[1]);
  });
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  createDemoServer().listen(5173, '127.0.0.1', () => {
    console.log('baxian example: http://127.0.0.1:5173');
  });
}
