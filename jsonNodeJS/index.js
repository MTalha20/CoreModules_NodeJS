const fs = require("fs");

const bioData = {
    name : "Muhammad Talha",
    age : 22,
    institute: "DCS-UBIT",
}           //simple js object

const jsonData = JSON.stringify(bioData); //convert obj to json foramt

fs.writeFile("jsonData.json", jsonData, (err)=>{console.log("File has been written");}); //writing json file

fs.readFile("jsonData.json", "utf-8", (err,data) => {       //fetching json data => api 
    const fileData = JSON.parse(data);
    console.log(fileData); 
   
});

