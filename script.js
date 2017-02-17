 $ (function() {
	
	 localStorageService.init();
	 localStorageService.initAuthor();
	 liblaryView.showBooks(liblary.getBooks());
	 authorView.showAuthors(liblaryAuthor.getAuthors());
	 liblaryControler.init();
	 authorControler.init();
	 liblaryControler.removeBook();
	 liblaryControler.editBook();
	 //liblaryView.editBook();
	//liblaryView.removeBook();
 
   });



