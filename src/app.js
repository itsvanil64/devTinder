const express= require("express");
const app= express();

// app.use('/', (req,res)=> {
//     res.send("hello from the dashboard");
// });

// app.use('/home/2', (req,res)=> {
//     res.send("from home 2");
// });

// app.use('/home', (req,res)=> {
//     res.send("from home");
// });

// app.use('/user', (req,res)=>{
//     res.send("its user only ")
// });

// app.get('/user', (req,res)=>{
//     console.log(req.query);
//     res.send({firstName:'vanshika', lastName:'jaiswal'})
// });

app.get('/user/:userid/:name/:pass', (req,res)=>{
    console.log(req.params);
    res.send({firstName:'vanshika', lastName:'jaiswal'})
});

app.get('/*fly$/', (req,res)=>{
    res.send({firstName:'vanshika', lastName:'jaiswal'})
});

app.post('/user',(req,res)=>{
    //saving data to DB
    res.send("successfully saved to DB");
});

app.delete('/user',(req,res)=>{
    //saving data to DB
    res.send("deleted db successfully");
});

app.use('/test',(req,res) => {
    res.send("hello from the test");
});

// app.use('/', (req,res)=> {
//     res.send("hello from the dashboard");
// });

app.listen(3000, ()=> {
    console.log("server is successfully listening om port 3000");
});
