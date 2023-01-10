const path = require("path");


// path of file
// console.log(path.basename("F:\NodeJS\IntroToNodeJS\pathModule\index.js"));

//directory
// console.log(path.dirname("F:\NodeJS\IntroToNodeJS\pathModule\index.js"));

//extension (.html, .txt)
// console.log(path.extname("index.py"));

//directory, file, base, ext name 
// console.log(path.parse("F:\NodeJS\IntroToNodeJS\pathModule\index.js"));

// accessing single object using parse
console.log(path.parse("F:\NodeJS\IntroToNodeJS\pathModule\index.js").name);

