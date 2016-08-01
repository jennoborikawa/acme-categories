var express = require('express'); 
var Db = require('../db.js'); 
// var bodyParser = require('body-parser'); 

var router = express(); 
// router.use(bodyParser.urlencoded({extended: false})); 



router.get('/', function(req, res, next){
    res.render('index', {title: 'Home', _data: Db.getData()}); 
}); 

router.get('/categories/:category', function(req, res, next){
    res.render('category', {title: req.params.category, 
        category: Db.getCategoryData(req.params.category), 
        _data: Db.getData()
    });
});

router.post('/categories', function(req,res, next){
    var name = req.body.name; 
    Db.addCategory(name); 
    res.redirect('/categories/' + name); 
}); 

router.post('/categories/:category/products', function(req, res, next){
    var name = req.body.name; 
    Db.addProduct(req.params.category, name); 
    res.redirect('categories/' + req.params.category); 
    
}); 

// router.delete('/categories/:category/products/:index', function(req, res, next){
//     Db.deleteProduct(req.params.category, req.params.index); 
//     res.redirect('/'); 
// }); 


module.exports = router; 