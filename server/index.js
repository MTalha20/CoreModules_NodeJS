const http = require("http");

const server = http.createServer((req,res)=>{
    res.end("Hello This is NodeJS Server");         // response to  a request
});

server.listen(8000, '127.0.0.1', ()=>{                  // server listening to request
    console.log("Server is running at port 3000");      //call back        
});

