const nanoid = require('nanoid');

module.exports = (len = 18) => {
  return nanoid(len);
}