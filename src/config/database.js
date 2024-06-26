require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test': '.env'
})

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT || 'mysql',
  storage: './__tests__/database.sqlite',
  operatorsAliases: 0,
  logging: false,
  define: {
    timestamps: false,
    undescored: true,
    undescoredAll: true
  },
};
