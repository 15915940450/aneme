const express=require('express');
const app=express();

app.use(express.static('./public'));
app.get('/marksix',(req,res)=>res.send('Hello World!'));

app.use(function (req,res) {
  res.status(404).send('Sorry can\'t find that!');
});

app.listen(1594,()=>console.log('aneme app running at localhost:1594'));
