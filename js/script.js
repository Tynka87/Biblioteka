 $(function () {

 	localStorageService.init();
 	localStorageService.initAuthor();
 	liblaryView.showBooks(liblary.getBooks());
 	authorView.showAuthors(liblaryAuthor.getAuthors());
 	liblaryControler.init();
 	authorControler.init();
 	liblaryControler.removeBook();
 	liblaryControler.editBook();
 	liblaryControler.cross();

 	//liblaryView.editBook();
 	//liblaryView.removeBook();

 });