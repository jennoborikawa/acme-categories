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
    // addCategory: function(category){
    //     _data[category] = category; 
    // }, 
    addProduct: function(category){
        _data[category].push({name: category}); 
    }
    
}; 




