const add  = (n1,n2) => {
    return n1 + n2;
}
const sub  = (n1,n2) => {
    return n1 - n2;
}
const name  = (first,last) => {
    return first+' '+last;
}

const title = "Import and Export Custom Modules"

// if export only single object
// module.exports = add; 

//exports multi objects
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.name = name;
// module.exports.title = title;

//exposrt multi objects in single line
module.exports = {add, sub, name, title};


