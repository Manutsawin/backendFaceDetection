require('dotenv').config();
module.exports = {
    HOST: process.env.POSTGRES_HOST,
    USER: process.env.POSTGRES_USER,
    port: process.env.POSTGRES_PORT,
    PASSWORD: process.env.POSTGRES_PASSWORD,
    DB: process.env.POSTGRES_DATABASE,
    dialect: process.env.POSTGRES_DIALECT,
    pool: {
      max: parseInt(process.env.POSTGRES_MAX),
      min: parseInt(process.env.POSTGRES_MIN),
      acquire: parseInt(process.env.POSTGRES_ACQUIRE),
      idle: parseInt(process.env.POSTGRES_IDLE)
    }
  };