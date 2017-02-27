 $(function () {

 	localStorageService.init();
 	localStorageService.initAuthor();
 	authorView.showAuthors(liblaryAuthor.getAuthors());
 	liblaryControler.init();
 	authorControler.init();
 	liblaryView.showBooks(liblary.getBooks(), liblaryAuthor.getAuthors());

 	//liblaryView.editBook();
 	//liblaryView.removeBook();

 });