// ecosystem.config.js
// Jalankan: pm2 start ecosystem.config.js --env production

module.exports = {
  apps: [
    {
      name: "bit-automation-web",
      script: "node_modules/.bin/next",
      args: "start",

      // Gunakan mode cluster untuk memanfaatkan semua CPU core
      // Set ke angka tertentu jika ingin batasi, misal: instances: 2
      instances: "max",
      exec_mode: "cluster",

      // Working directory (sesuaikan dengan path di VPS)
      cwd: "./",

      // Environment variables production
      env_production: {
        NODE_ENV: "production",
        PORT: 3000,
      },

      // Environment variables development (jika perlu)
      env_development: {
        NODE_ENV: "development",
        PORT: 3000,
      },

      // Auto restart jika crash
      autorestart: true,
      watch: false,             // Jangan watch di production
      max_memory_restart: "1G", // Restart jika RAM > 1GB

      // Log configuration
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      error_file: "./logs/pm2-error.log",
      out_file: "./logs/pm2-out.log",
      merge_logs: true,
    },
  ],
};
