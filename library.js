var liblary = {
	liblary : [],
	
	
	
	addBook : function(title,author,year){
		var book = new Book(title,author,year);
		
		
		this.liblary.push(book);
			
	},
	

	addBook2 : function(_json){
	
		var book = new Book(_json.title,_json.author,_json.year);
		this.liblary.push(book);
	
	},
	
	addBooks : function(_json){
		for(var i = 0; i < _json.length ; i++){
			this.addBook2(_json[i]);
			
		}
	},
	
	getBooks : function(){
		return this.liblary;
	}
	
};


