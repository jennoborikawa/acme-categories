var express = require('express'); 
var swig = require('swig'); 
swig.setDefaults({cache: false}); 
var methodOverride = require('method-override'); 
var bodyParser = require('body-parser'); 
var Db = require('./db');

var app = express(); 

app.set('view engine', 'html'); 
app.engine('html', swig.renderFile); 

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method')); 


app.use(express.static(__dirname + '/node_modules'));

app.get('/', function(req, res, next){
    res.render('index', {title: 'Home', categories: Db.categories(), 
    });
});

app.use('/categories', require('./routes/categories.js')); 

app.listen(process.env.PORT, function(){
    console.log('listening on ' + process.env.PORT); 
}); 

