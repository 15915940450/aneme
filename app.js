const express=require('express');
const app=express();

//static
app.use(express.static(__dirname+'/public'));
//require module.exports
const handleMarksix=require('./handle_route/marksix.js');
//route /marksix
app.get('/marksix',(req,res)=>res.send(handleMarksix()));
//404
app.use(function (req,res) {
  res.status(404).send('Sorry can\'t find that!');
});

app.listen(1594,()=>console.log('aneme app running at localhost:1594'));
