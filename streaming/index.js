const http = require("http");
const fs = require("fs");

const serevr = http.createServer();

serevr.on("request", (req,res) => {
//     const readStream = fs.createReadStream("data.txt");
//     readStream.on("data", (chunk)=>{
//         res.write(chunk);
//     });
//     readStream.on("end", ()=>{
//         res.end();
//     });
//     readStream.on("error", (err)=>{
//         res.end("File not Found");
//         console.log(err);
//     });

// Second Method -->

const readStream = fs.createReadStream("data.txt");
readStream.pipe(res);

}
);

serevr.listen(8000, "127.0.0.1", ()=>{
    console.log("Server is running at port 8000");
});