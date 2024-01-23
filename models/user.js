// models/user.js
const pool = require('../config/db');

const getUserByUsername = async (userName) => {
  const [rows] = await pool.execute('SELECT * FROM users WHERE userName = ?', [userName]);
  return rows[0];
};

module.exports = { getUserByUsername };
