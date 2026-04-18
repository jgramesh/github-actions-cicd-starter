const http = require('http');
const { getAppInfo, healthResponse } = require('./app');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(healthResponse()));
    return;
  }

  if (req.url === '/info') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(getAppInfo()));
    return;
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    message: 'Welcome to the GitHub Actions CI/CD starter app',
    endpoints: ['/health', '/info']
  }));
});

if (require.main === module) {
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = server;
