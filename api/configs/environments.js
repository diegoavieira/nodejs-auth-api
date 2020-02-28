const development = {
  db: {
    database: 'dev',
    username: '',
    password: '',
    params: {
      dialect: 'sqlite',
      storage: 'dev.sqlite',
      define: {
        underscored: true
      }
    }
  }
};

export { development };
