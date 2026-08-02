
const express=require("express");

const app=express();
app.get("/",(req,res) => {
    res.send("Home Page");
});
app.get("/about",(req,res) => {
    res.send(`hey ${req.query.name} Welcome to About Page`);
});
app.get("/contact",(req,res) => {
    res.send("+9222222222222");
});
app.listen(3000,() => {
    console.log("Server is running on port 3000");
} )
