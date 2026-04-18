const fs = require('fs');
const path = require('path');

const filesToCheck = [
  path.join(__dirname, '..', 'src', 'app.js'),
  path.join(__dirname, '..', 'src', 'server.js'),
  path.join(__dirname, '..', 'tests', 'app.test.js')
];

let hasError = false;

for (const file of filesToCheck) {
  const content = fs.readFileSync(file, 'utf8');
  if (!content.endsWith('\n')) {
    console.error(`${file} must end with a newline`);
    hasError = true;
  }
  if (content.includes('var ')) {
    console.error(`${file} uses var; prefer const/let`);
    hasError = true;
  }
}

if (hasError) {
  process.exit(1);
}

console.log('Basic lint checks passed');
