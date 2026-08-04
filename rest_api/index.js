const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");
const PORT = 5000;
const fs= require("fs");
// Middle-ware plugin
app.use(
	express.urlencoded({
		extended: false,
	}),
);
// app.use((req,resp,next)=>{
//     console.log("HEllo form Middleware 1");
//     // return resp.json({msg:"Hello from Middleware 1"});  for ending resp and not going to next middleware
//     next();

// })
// app.use((req,resp,next)=>{
//     console.log("HEllo form Middleware 2");
//     // return resp.json({msg:"Hello from Middleware 2"});  for ending resp and not going to next middleware
//     next();

// })
// Modifying req in middleware
app.use((req,resp,next)=>{
    console.log("HEllo form Middleware 1");
    req.username="Emaan";
    next();

})
app.use((req,resp,next)=>{
    console.log(`HEllo form Middleware 2 ${req.username}`);
    
    next();

})
//HTML response
// app.get("/users", (req, resp) => {
// 	const html = `<ul>${users.map((user) => `<li>${user.first_name}</li>`).join("")}</ul>`;
// 	resp.send(html);
// });
// Rest API response
app.get("/api/users", (req, resp) => {
    console.log(`i am in get route of ${req.username}`);
	return resp.json(users);
});
app.get("/api/users/:id", (req, resp) => {
	const id = Number(req.params.id);
	const user = users.find((user) => user.id === id);
	return resp.json(user);
});
app.post("/api/users", (req, resp) => {
	// TODO :Create new User
    const body=req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users),(err)=>{
        if(err){
            console.log(err);
        }    });
	resp.json({ status: "Success" });
});
app.patch("/api/users/:id", (req, resp) => {
	// TODO :Editing the user w.r.t id
	resp.json({ status: Pending });
});
app.delete("/api/users/:id", (req, resp) => {
	// TODO :Deleting  the user w.r.t id
	resp.json({ status: Pending });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
