var authorControler = {
	 
	init : function(){
		
		$("#send2").click(function(){
		//e.preventDefault();
		
			var id = $("#id").val();	
			var name = $("#name").val();
			var surname = $("#surname").val();
	//var dateOfBirth = $("#dateOfBirth").val();	
		
		liblaryAuthor.addAuthor(id,name,surname);
		localStorageService.addAuthortoLocalStor(liblaryAuthor.getAuthors());
		authorView.clearViewAuthor();
		authorView.showAuthors(liblaryAuthor.getAuthors());
		
	
		});
		
	}

};
	