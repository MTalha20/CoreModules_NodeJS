const EventEmitter = require("events");

const event = new EventEmitter();


event.on("mySkills", ()=>{
    console.log("Flutter Development");
});                                              // event listening 

event.on("mySkills", ()=>{
    console.log("Firebase, NodeJS");
});                                                             // multi event listening

event.on("mySkills", ()=>{
    console.log("Python, Java, SQL");
});                                                                     

event.emit("mySkills");                                  // event emitting, or fire

// -----------------------------------//

event.on("Qualification", (qua, sem)=>{
    console.log(`${qua} ${sem} semester student`);
});

event.emit("Qualification", "BSCS", 7);                 // event firing with parameters