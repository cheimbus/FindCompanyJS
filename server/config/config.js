const dotenv = require("dotenv");
dotenv.config();

/**
 * @description @config - .env 환경변수로 처리하였습니다.
 * username에는 데이터베이스 사용자이름이고 password는 데이터베이스 비밀번호
 * database에는 데이터베이스 이름 host는 로컬에서 진행하기때문에 localhost
 * dialect에는 mysql을 사용합니다.
 */
const config = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORS,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
  },
  test: {
    username: process.env.DATABASE_USER_TEST,
    password: process.env.DATABASE_PASSWORS_TEST,
    database: process.env.DATABASE_NAME_TEST,
    host: process.env.DATABASE_HOST_TEST,
    dialect: process.env.DATABASE_DIALECT_TEST,
    port: process.env.DATABASE_PORT,
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORS,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
    port: process.env.DATABASE_PORT,
  },
};

module.exports = config;
