import { getConfigValue } from './util.js';
import mysql from 'mysql2';

const pool = mysql.createPool({
    host: getConfigValue('DB_HOST'),
    user: getConfigValue('DB_USERNAME'),
    password: getConfigValue('DB_PASSWORD'),
    database: getConfigValue('DB_NAME'),
});

pool.getConnection((err, connection) => {
    if(err) throw err;
    console.log("Database connected!");
    connection.release();
});

export default pool;