const os = require("os");

// console.log(os.arch());
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.type());
// console.log(os.tmpdir());

const freeMemory = os.freemem();
console.log(`${freeMemory/1024/1024/1024} GB`);

const totalMemory = os.totalmem()
console.log(`${totalMemory/1024/1024/1024} GB`);
