const crypto = require('crypto');

module.exports = (len = 24) => {
  return crypto.randomBytes(100).toString('base64').replace(/[+/]/g, '').substr(0, len);
}