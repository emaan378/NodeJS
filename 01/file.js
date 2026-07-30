// file handling in nodeJS
const fs = require("fs");
// fs file system
// sync call
// fs.writeFileSync("./test.txt","Hey Lets work on nodeJS");
// asynchornus version 
fs.writeFile("./test.txt","Hey Lets Start nodeJS",(err)=>{err})
