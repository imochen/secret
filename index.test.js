const secret = require('./index.js');

const k1 = secret();

if (k1.length === 18) {
  console.log('success!');
}

const k2 = secret(24);

if (k2.length === 24) {
  console.log('success!');
}