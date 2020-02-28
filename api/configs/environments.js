const development = {
  db: {
    database: 'db',
    username: '',
    password: '',
    params: {
      dialect: 'sqlite',
      storage: 'db.sqlite',
      define: {
        underscored: true
      }
    }
  }
};

export { development };
