const express = require("express");
const app = express();

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

app.use(
  "/user",
  (req, res, next) => {
    console.log("handling the route user");
    //res.send("Response1!");
    next();
    // res.send("Response1!");
  },
  (req, res,next) => {
    console.log("handling the route user frm second route");
   // res.send("Response2!");
   next();
  },
  (req, res,next) => {
    console.log("handling the route user frm 3rd route");
    //res.send("Response3!");
    next();
  },
  (req, res,next) => {
    console.log("handling the route user frm forthroute");
    res.send("Response4!"); // if not handled here then goes in infinite route
    //next(); gives the error becoz it does not find any route.
  }
);

// app.get('/user/:userid/:name/:pass', (req,res)=>{
//     console.log(req.params);
//     res.send({firstName:'vanshika', lastName:'jaiswal'})
// });

// app.get('/*fly$/', (req,res)=>{
//     res.send({firstName:'vanshika', lastName:'jaiswal'})
// });

// app.post('/user',(req,res)=>{
//     //saving data to DB
//     res.send("successfully saved to DB");
// });

// app.delete('/user',(req,res)=>{
//     //saving data to DB
//     res.send("deleted db successfully");
// });

// app.use('/test',(req,res) => {
//     res.send("hello from the test");
// });

// app.use('/', (req,res)=> {
//     res.send("hello from the dashboard");
// });

app.listen(3000, () => {
  console.log("server is successfully listening om port 3000");
});
