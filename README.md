# secret

> a command for generate a secret key

## Usage

### As Command

```shell
npm i -g @mochen/secret
```

```shell
$ secret
 ┌──────────────────────────────┐
 │                              │
 │   wN3hQP2VdcpaJfLc6EN3IkxH   │
 │                              │
 └──────────────────────────────┘
```

### As node package

```shell
npm i  @mochen/secret --save
```

```javascript
const secret = require('./secret');
const k1 = secret();
console.log(k1); // wN3hQP2VdcpaJfLc6EN3IkxH
```
