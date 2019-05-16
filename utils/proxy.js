/**
 * FC CORS bypass proxy for local UI development
 */

const httpProxy = require('http-proxy');
const http = require('http');
const path = require('path');

const proxyFile = path.join(path.dirname(__filename), 'proxy.json');
const config = require(proxyFile);

const proxy = httpProxy.createProxyServer({
    target: config.target,
});
const target = config.target;
const prettyUrl = `http://localhost:${config.port}`;

console.info(`Foodcourt API proxy started at ${prettyUrl}`);
console.info(`Proxying ${prettyUrl} => ${config.target}`);

http.createServer((req, res) => {
  console.log(`> ${req.method} ${req.url}`);
  const isOption = req.method.toUpperCase() === 'OPTIONS';

  if (!isOption) {
    proxy.web(req, res, {target});
  }

  // Patch response header
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'X-XSRF-TOKEN, Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');

  if (isOption) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end();
  }
}).listen(config.port);

proxy.on('error', (err) => console.error(err));