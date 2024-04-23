const { createPool } = require('mysql2/promise');
const database_config = require('../configs/database.config');

const pool = createPool({
  host: database_config.host,
  user: database_config.user,
  password: database_config.password,
  database: database_config.database,
  waitForConnections: true,
  connectionLimit: 10,
});

async function query(sql, values) {
  try {
    const connection = await pool.getConnection();
    const [rows, fields] = await connection.query(sql, values);
    connection.release();
    return rows;
  } catch (error) {
    console.error('Error:', error);
  }
}


module.exports = { query };
