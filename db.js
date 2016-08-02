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
    // getProduct: function(category, index){
    //     return _data[category][index]; 
    // }, 
    addCategory: function(category){
        _data[category] = []; 
    }, 
    addProduct: function(category, product){
        _data[category].push({name: product}); 
    }, 
    deleteProduct: function(category, index){
        _data[category].splice([index], 1); 
    }
    
}; 




