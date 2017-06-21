 $(function () {

   localStorageService.init().then(function () {
     localStorageService.initAuthor().then(function () {
       libraryView.showAuthorsInBook(libraryAuthor.getAuthors());
       libraryView.showBooks(library.getBooks(), libraryAuthor.getAuthors());
       authorView.showAuthors(libraryAuthor.getAuthors());
       libraryControler.init();
       authorControler.init();
     }).catch(function () {
       console.log('nastąpił bład w autorze');
     });
   }).catch(function () {
     console.log('nastąpił bład');
   });



 });
