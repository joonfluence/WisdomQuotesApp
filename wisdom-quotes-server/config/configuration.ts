export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    name: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    password: process.env.DATABASE_PASSWORD,
    username: process.env.DATABASE_USER_NAME,
  },
});
