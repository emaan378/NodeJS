// file handling in nodeJS
const fs = require("fs"); // fs file system


// writing data in a file
// sync call
// fs.writeFileSync("./test.txt","Hey Lets work on nodeJS");
// asynchornus version 
// fs.writeFile("./test.txt","Hey Lets Start nodeJS",(err)=>{err})



// read data from file
// const result=fs.readFileSync("./contact.txt","utf-8");
// console.log(result)
// first parameter is path second is encoding

// Async 
// fs.readFile("./contact.txt","utf-8",(err,result)=>{
// if (err){
//     console.log("Error",error)
// }
// else{
//     console.log(result)
// }
// })

// Appending data in a file
// fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString())
// fs.appendFileSync("./test.txt",`\nHow Node journey Goes`)

// copying file
fs.cpSync("./test.txt","./contact.txt")
//it copy the data of test.txt and paste that into contact .txt

// Deleting file
fs.unlinkSync("./contact.txt")

// Statistics of a file
console.log(fs.statSync("./test.txt"))