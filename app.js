const express=require('express');
const app=express();

app.get('/',(req,res)=>res.send('Hello World!'));

app.listen(1594,()=>console.log('aneme app running at localhost:1594'));