var _data = {
    'Office Supplies': [
        {name: 'paperclips'}, 
        {name: 'expo pens'}
        ], 
    'Books': [
        {name: 'The Bell Jar'}, 
        {name: 'The Martian'}
        ]
}; 

module.exports = {
    getData: function(){
      return _data;   
    },
    getCategoryData: function(category){
        return _data[category]; 
    },
    getProduct: function(category, index){
        return _data[category][index]; 
    }, 
    addCategory: function(category){
        _data[category] = []; 
    }, 
    addProduct: function(category, product){
        _data[category].push({name: product}); 
    }, 
    // deleteCategory: function(category){
        
    // }, 
    deleteProduct: function(category, product){
        //grab objItem to delete, find index, splice to delete 
        var toDelete = _data[category].filter(function(prodObj){
            return prodObj.name === product; 
        }); 
        var idx = _data[category].indexOf(toDelete); 
        _data[category].splice([idx], 1); 
    }
    
}; 




