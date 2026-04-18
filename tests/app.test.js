const test = require('node:test');
const assert = require('node:assert/strict');
const { getAppInfo, healthResponse } = require('../src/app');

test('getAppInfo returns expected app metadata', () => {
  const info = getAppInfo();
  assert.equal(info.name, 'GitHub Actions CI/CD Starter');
  assert.equal(info.version, '1.0.0');
  assert.ok(info.timestamp);
});

test('healthResponse returns ok status', () => {
  const health = healthResponse();
  assert.equal(health.status, 'ok');
  assert.ok(['local', 'test', 'staging', 'production'].includes(health.env));
});
