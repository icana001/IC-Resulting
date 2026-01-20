module.exports = {
  apps: [
    {
      name: 'ic-resulting',
      port: 3000,
      exec_mode: 'fork',
      instances: 1,
      script: './.output/server/index.mjs',
      env: {
        NODE_ENV: 'production',
        NITRO_PORT: 3000,
        NITRO_HOST: '127.0.0.1'
      },
      // Automatischer Neustart bei Absturz
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      // Logging
      error_file: '/var/log/pm2/ic-resulting-error.log',
      out_file: '/var/log/pm2/ic-resulting-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      // Graceful restart
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 10000
    }
  ]
}
