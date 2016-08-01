var express = require('express'); 
var swig = require('swig'); 
swig.setDefaults({cache: false}); 

var app = express(); 

app.set('view engine', 'html'); 
app.engine('html', swig.renderFile); 

app.use(express.static(__dirname + '/node_modules'));

var routes = require('./routes/categories.js'); 
app.use(routes); 



app.listen(process.env.PORT, function(){
    console.log('listening on ' + process.env.PORT); 
}); 

