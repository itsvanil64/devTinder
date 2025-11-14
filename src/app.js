const express= require("express");
const app= express();

// app.use('/', (req,res)=> {
//     res.send("hello from the dashboard");
// });

app.use('/home', (req,res)=> {
    res.send("hello hello hello");
});
  
app.use('/test',(req,res) => {
    res.send("hello from the server");
});

app.listen(3000, ()=> {
    console.log("server is successfully listening om port 3000");
});
