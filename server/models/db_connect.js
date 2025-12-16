require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PSWD,
  database: process.env.MYSQL_DB,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}).promise(); // <--- important for async/await

// wrapper function
const query = async (sql, binding = []) => {
  try {
    const [rows, fields] = await pool.query(sql, binding);
    return rows;
  } catch (err) {
    console.error('Database query error:', err);
    throw err;
  }
};

module.exports = { pool, query };
