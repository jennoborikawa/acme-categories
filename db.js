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
    categories: function(){
      return Object.keys(this.getData());
    },
    getData: function(){
      return _data;   
    },
    getProducts: function(category){
        return _data[category]; 
    },
    addCategory: function(category){
        _data[category] = []; 
    }, 
    deleteCategory: function(category){
      delete _data[category];
    }, 
    addProduct: function(category, product){
        _data[category].push({name: product}); 
    }, 
    deleteProduct: function(category, index){
        _data[category].splice([index], 1); 
    }
    
}; 




