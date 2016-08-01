var express = require('express'); 
var swig = require('swig'); 
swig.setDefaults({cache: false}); 
var methodOverride = require('method-override'); 
var bodyParser = require('body-parser'); 

var app = express(); 

app.set('view engine', 'html'); 
app.engine('html', swig.renderFile); 

app.use(bodyParser.urlencoded({extended: false})); 

app.use(methodOverride('_method')); 


app.use(express.static(__dirname + '/node_modules'));

var routes = require('./routes/categories.js'); 
app.use(routes); 



app.listen(process.env.PORT, function(){
    console.log('listening on ' + process.env.PORT); 
}); 

