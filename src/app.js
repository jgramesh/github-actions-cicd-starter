function getAppInfo() {
  return {
    name: 'GitHub Actions CI/CD Starter',
    version: '1.0.0',
    environment: process.env.APP_ENV || 'local',
    timestamp: new Date().toISOString()
  };
}

function healthResponse() {
  return {
    status: 'ok',
    uptime: Math.round(process.uptime()),
    env: process.env.APP_ENV || 'local'
  };
}

module.exports = { getAppInfo, healthResponse };
