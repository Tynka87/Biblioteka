var liblaryControler = {
	 
	init : function(){
		
			$("#send").click(function(){
		//e.preventDefault();
			var title = $("#title").val();
			var author = $("#authorlist option:selected").val();
			var year = $("#year").val();
				
			
	
			liblary.addBook(title,author,year);
			localStorageService.addLiblarytoLocalStor(liblary.getBooks());
			liblaryView.clearView();
			liblaryView.showBooks(liblary.getBooks());

	
		});
		
	}

	
};
	
	