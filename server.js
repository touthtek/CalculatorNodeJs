const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get('/', function(req, res){
   res.sendFile(__dirname+ '/calculator.html');
});

app.get('/contact', function(req, res){
   res.send('Tosin : contact me @ olujohnsonoluwatosin@gmail.com');
});

app.post('/', function(req, res){
  var {n1, n2} = req.body;
  var c = Number(n1) + Number(n2);
  res.send('the resule is '+ c);
})

app.listen(3000, function(){
  console.log('server is listening to port 3000');
});

