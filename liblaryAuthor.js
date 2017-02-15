var liblaryAuthor = {
	liblaryAuthor : [],

	
	addAuthor : function(id,name,surname){
		var author = new Author(id,name,surname);
		this.liblaryAuthor.push(author);
		
		localStorageService.addAuthortoLocalStor(this.liblaryAuthor);
		
	},
	
	addAuthor2 : function(_json){
	
		var author = new Author(_json.id,_json.name,_json.surname);
		this.liblaryAuthor.push(author);

		
	},
	
	addAuthors : function(_json){
		for(var i = 0; i < _json.length ; i++){
			this.addAuthor2(_json[i]);
			
		}
	},
	
	getAuthors: function(){
		//console.log( this.liblaryAuthor);
		return this.liblaryAuthor;
		
	},
	
	getAuthor: function(id){
		
		
		return a;
	}
	
};