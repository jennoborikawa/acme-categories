var router = require('express').Router(); 
var Db = require('../db.js'); 


router.get('/:category', function(req, res, next){
    res.render('category', {
        categories: Db.categories(),
        title: req.params.category, 
        category: req.params.category,
        products: Db.getProducts(req.params.category), 
    });
});

router.post('/', function(req,res, next){
    var category = req.body.name; 
    Db.addCategory(category); 
    res.redirect('/categories/' + category); 
}); 

router.delete('/:category', function(req, res, next){
    Db.deleteCategory(req.params.category); 
    res.redirect('/'); 
}); 

router.post('/:category/products', function(req, res, next){
    var product = req.body.name;
    Db.addProduct(req.params.category, product); 
    res.redirect('/categories/' + req.params.category); 
    
}); 

router.delete('/:category/products/:idx', function(req, res, next){
    Db.deleteProduct(req.params.category, req.params.idx*1); 
    res.redirect('/categories/' + req.params.category); 
}); 


module.exports = router; 
