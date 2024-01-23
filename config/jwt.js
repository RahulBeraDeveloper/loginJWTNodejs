// config/jwt.js
const crypto = require('crypto');

const secret = crypto.randomBytes(32).toString('hex');

module.exports = {
  secret,
  expiresIn: '1h'
};
