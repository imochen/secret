# secret

> a command for generate a secret key

## Usage

### As Command

```shell
npm i -g @mochen/secret
```

```shell
$ secret
┌────────────────────────┐
│                        │
│   PA8pz-yZCdLgnuNKpl   │
│                        │
└────────────────────────┘

$ secret 3
┌────────────────────────┐
│                        │
│   i8OhDqFU5p5cjG75ix   │
│   8rz61U5XJFIrM3opH0   │
│   st9p3PrUWgeasSOZQv   │
│                        │
└────────────────────────┘
```

### As node package

```shell
npm i  @mochen/secret --save
```

```javascript
const secret = require('./secret');
const k1 = secret();
console.log(k1); // Ym_U4QrozRPMyKzrZv
```
