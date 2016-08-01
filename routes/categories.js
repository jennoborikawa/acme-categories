var express = require('express'); 
var Db = require('../db.js'); 
var bodyParser = require('body-parser'); 

var router = express(); 
router.use(bodyParser()); 



router.get('/', function(req, res, next){
    res.render('index', {title: 'Home', _data: Db.getData()}); 
}); 

router.get('/categories/:category', function(req, res, next){
    res.render('category', {title: req.params.category, 
        category: Db.getCategoryData(req.params.category), 
        _data: Db.getData()
    });
});

// router.post('/categories', function(req,res, next){
//     var category = req.body.category; 
//     Db.addCategory(category); 
//     res.redirect('/categories/:category'); 
// }); 

router.post('/categories/:category/products', function(req, res, next){
    var name = req.body.name; 
    Db.addProduct(name); 
    res.redirect('categories/:category'); 
    
}); 


module.exports = router; 