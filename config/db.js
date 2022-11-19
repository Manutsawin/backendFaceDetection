require('dotenv').config();
module.exports = {
    HOST: "ec2-18-215-41-121.compute-1.amazonaws.com",
    USER: "khsudqauxcthts",
    port: 5432,
    PASSWORD: "133b21d7ffa6629dab436ba0f53219f32acfcdfcabcaa7d7825cf62673196766",
    DB: "d6p2pgpkc2u5tp",
    dialect: "postgres",
    pool: {
        max: 5, 
        min: 0,
        acquire: 30000,
        idle: 10000
  }
  };
