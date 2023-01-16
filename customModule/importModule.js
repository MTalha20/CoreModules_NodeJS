// if export only single object
// const object = require('./index');
// console.log(object(5,5));

// exports multi objects
// const object = require('./index');
// console.log(object.title);
// console.log(object.add(2,2));
// console.log(object.sub(10,2));
// console.log(object.name('Muhammad','Talha'));

//exposrt multi objects in single line
const {add, sub, name, title} = require('./index');
console.log(add(5,10));
console.log(sub(35,10));
console.log(name("Muhammad","Talha"));
console.log(title);