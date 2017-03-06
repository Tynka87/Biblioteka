 $(function () {

 	localStorageService.init();
 	localStorageService.initAuthor();
 	authorView.showAuthors(liblaryAuthor.getAuthors());
 	liblaryView.showBooks(liblary.getBooks(), liblaryAuthor.getAuthors());
 	liblaryControler.init();
 	authorControler.init();

 });