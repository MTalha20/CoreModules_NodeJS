const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("Hello This is NodeJS Server Home page");
    }         // response to  a request
    else if(req.url == "/contact"){
        res.end("Hello This is NodeJS Server Contact Us Page");
    }
    else if(req.url == "/about"){
        res.end("Hello This is NodeJS Server About Us Page");
    }
    else{
        res.writeHead(404 , {"Content-type": "text/html" })
        res.end("<h1> Error 404 \nPage does not exist </h1>")
    }
});

server.listen(8000, '127.0.0.1', ()=>{                  // server listening to request
    console.log("Server is running at port 3000");      //call back        
});

