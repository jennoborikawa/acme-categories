var express = require('express'); 
var Db = require('../db.js'); 
// var bodyParser = require('body-parser'); 

var router = express(); 
// router.use(bodyParser.urlencoded({extended: false})); 


// View Home
router.get('/', function(req, res, next){
    res.render('index', {
        title: 'Home', 
        _data: Db.getData(), 
    });
    // console.log(Db.getProduct('Books', 1));
}); 

// View Category 
router.get('/categories/:category', function(req, res, next){
    res.render('category', {
        title: req.params.category, 
        _data: Db.getData(), 
        categoryName: req.params.category,
        products: Db.getCategoryData(req.params.category), 
    });
});

// Add new category (post doesn't need swig variables passed in)
router.post('/categories', function(req,res, next){
    var newCategory = req.body.name; 
    Db.addCategory(newCategory); 
    res.redirect('/categories/' + newCategory); 
}); 

// Add new product (post doesn't need swig variables passed in)
router.post('/categories/:category/products', function(req, res, next){
    var newProduct = req.body.name;
    Db.addProduct(req.params.category, newProduct); 
    res.redirect('/categories/' + req.params.category); 
    
}); 

// router.delete('/', function(req, res, next){
//     Db.deleteCategory(); 
//     res.redirect('/'); 
// }); 

router.delete('/categories/:category/products/:productname', function(req, res, next){
    // console.log(req.params.category, req.params.id); 
    Db.deleteProduct(req.params.category, req.params.productname); 
    res.redirect('/categories/' + req.params.category); 
    
}); 


module.exports = router; 


// define variables in views templates

// Grab data for defining variables in 2 ways: 
    // req.params.___ (from the url)
    // req.body.name (from the body of a form, needs name='name' att in view's form, require body-parser in the server)
    

