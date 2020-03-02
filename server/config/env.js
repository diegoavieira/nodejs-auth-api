export default {
  port: process.env.PORT,
  db_name: process.env.DB_NAME,
  db_user: process.env.DB_USER,
  db_pass: process.env.DB_PASS,
  db_params: {
    dialect: 'sqlite',
    storage: 'dev.sqlite',
    define: {
      underscored: true
    }
  }
};
