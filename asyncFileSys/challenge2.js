const fs = require("fs");

// CRUD Operation Of Async File

// fs.writeFile("challengeTask2/bio.txt","My name is Muhammad Talha" ,(err)=>{console.log("File created");});

// fs.appendFile("challengeTask2/bio.txt","\nI am BSCS Student" ,(err)=>{console.log("File appended");});

// fs.readFile("challengeTask2/bio.txt", "utf-8" , (err, data) => { console.log(data); });

// fs.rename("challengeTask2/bio.txt", "challengeTask2/mybio.txt" ,(err)=>{console.log("File renamed");});

// fs.unlink("challengeTask2/mybio.txt", (err) => console.log("File deleted"));

fs.rmdir("challengeTask2", (err) => console.log("Folder deleted"));



