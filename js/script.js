 $(function () {

 	localStorageService.init();
 	localStorageService.initAuthor();
 	libraryView.showAuthorsInBook(libraryAuthor.getAuthors());
 	libraryView.showBooks(library.getBooks(), libraryAuthor.getAuthors());
	authorView.showAuthors(libraryAuthor.getAuthors());
 	libraryControler.init();
 	authorControler.init();

 });