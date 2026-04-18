const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
fs.mkdirSync(distDir, { recursive: true });

const buildInfo = {
  app: 'github-actions-cicd-starter',
  builtAt: new Date().toISOString(),
  nodeVersion: process.version,
  commitSha: process.env.GITHUB_SHA || 'local-build'
};

fs.writeFileSync(path.join(distDir, 'build-info.json'), JSON.stringify(buildInfo, null, 2));
fs.copyFileSync(path.join(__dirname, '..', 'src', 'server.js'), path.join(distDir, 'server.js'));

console.log('Build artifacts created in dist/');
