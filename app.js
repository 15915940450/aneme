const express=require('express');
const app=express();
//bodyParser
const jsonParser=require('body-parser').json();
app.use(jsonParser);
//=====routes
const routerMarksix=require('./routes/marksix.js');
app.use('/marksix',jsonParser,routerMarksix);

//static
app.use(express.static(__dirname+'/public'));

//404
app.use(function (req,res) {
  res.status(404).send('Sorry can\'t find that!');
});

app.listen(1594,()=>console.log('==========aneme app running at localhost:1594=========='));
