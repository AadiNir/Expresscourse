const express = require('express');
const app = express();
const port= 3000;
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.get('/route2',(req,res)=>{
    res.send('hello world from route2 grt ass ')
})
app.listen(port,()=>{
    console.log(`It's been hosted on ${port}`)
})