var libraryAuthor = {
	libraryAuthor : [],

	
	addAuthor : function(id, name, surname, index){
		var author = new Author(id, name, surname);
		
		if (index == undefined) {
			this.libraryAuthor.push(author);
		} else {
			this.libraryAuthor.splice(index, 1, author);
		};	
	
	},
	
	addAuthor2 : function(_json){
	
		var author = new Author(_json.id,_json.name,_json.surname);
		this.libraryAuthor.push(author);		
	},
	
	addAuthors : function(_json){
		for(var i = 0; i < _json.length ; i++){
			this.addAuthor2(_json[i]);			
		}
	},
	
	getAuthors: function(){
		//console.log( this.libraryAuthor);
		return this.libraryAuthor;		
	},
	
	getAuthor: function(id){
		return a;
	},
	
	getAuthorInPopUp: function (number) {
		return this.libraryAuthor[number];
	},
	
	generatorId: function(){
	
		return this.libraryAuthor[this.libraryAuthor.length-1].getId() + 1;
		
	}
	
};