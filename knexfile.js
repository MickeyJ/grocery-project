module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/grocery_project',
    pool: {
      min: 2,
      max: 10
    }
  },
  seeds: {
    directory: './seeds/'
  }
};