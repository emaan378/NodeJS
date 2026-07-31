// file handling in nodeJS
const fs = require("fs"); // fs file system


// writing data in a file
// sync call --blocking request
// fs.writeFileSync("./test.txt","Hey Lets work on nodeJS");
// asynchornus version 
// fs.writeFile("./test.txt","Hey Lets Start nodeJS",(err)=>{err})



// read data from file
// const result=fs.readFileSync("./contact.txt","utf-8");
// console.log(result)
// first parameter is path second is encoding

// Async --nonBlocking request
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
// fs.cpSync("./test.txt","./contact.txt")
//it copy the data of test.txt and paste that into contact .txt

// Deleting file
// fs.unlinkSync("./contact.txt")

// Statistics of a file
// console.log(fs.statSync("./test.txt"))

// getting detail of os system through os builtin function of nodejs
// const os=require("os");
// console.log(os.cpus().length)


// Blocking and non Blocking operations

// NonBlocking
// console.log(1)
// fs.readFile("./test.txt","utf-8",(err ,result)=>{
//     console.log(result,err)
// })
// console.log(2)

//Blocking
console.log(1)
const res=fs.readFileSync("./test.txt","utf-8")
console.log(res)
console.log(2)
