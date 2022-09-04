// Database secrets
const DB_HOST: string = process.env.DB_HOST;
const DB_PORT: number = Number(process.env.DB_PORT);
const DB_NAME: string = process.env.DB_NAME;
const DB_USER: string = process.env.DB_USER;
const DB_PASSWORD: string = process.env.DB_PASSWORD;

export { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD };
