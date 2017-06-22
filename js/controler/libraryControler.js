var libraryControler = {

    init: function () {

        this.showFullBook();
        this.removeBook();
        this.addNewBook();


        /*		$("#formBook").submit(function (e) {
        			e.preventDefault();
        			var title = $("#title").val();
        			var author = $("#authorlist option:selected").val();
        			var year = $("#year").val();



        			library.addBook(title, author, year);			localStorageService.addlibrarytoLocalStor(library.getBooks());		
        			libraryView.clearView();			libraryView.showBooks(library.getBooks(),libraryAuthor.getAuthors()); 


        		});*/

        $("body").on('submit', '#formBook', function () {
            //e.preventDefault();
            var index = undefined;
            var title = $(this.title).val();
            var author = $(this.authorlist).val();
            var year = $(this.year).val();
            index = $(this.index).val();

            library.addBook(title, author, year, index);
            localStorageService.addlibrarytoLocalStor(library.getBooks());

            if (index != undefined) {
                libraryView.clearView();
                libraryView.showBooks(library.getBooks(), libraryAuthor.getAuthors());
            }
        });
    },
    removeBook: function () {

        $("#library").on('click', '.item-delete', function () {
            let number = $(this).data('id');
            library.removeBook(number);
            localStorageService.addlibrarytoLocalStor(library.getBooks());
            libraryView.clearView();
            libraryView.showBooks(library.getBooks(), libraryAuthor.getAuthors());
        });
    },

    showFullBook: function () {

        $("#library").on('click', 'button.edit', function () {
            let number = $(this).data('id');

            $('.popUp').load('html/showFullBook.html', function () {
                $('#gridSystemModalLabel').append('Edytuj książke ');
                $('.modal').modal('show');
                popUpView.showBookInPopUp(library.getBook(number), number);
                popUpView.showAuthorsInPopUp(libraryAuthor.getAuthors(), library.getBook(number));
                
                
            });
        });
    },
    addNewBook: function () {

        $(".widget-book").on('click', 'a', function () {
         
            $('.popUp').load('html/showFullBook.html', function () {
                $('#gridSystemModalLabel').append('Dodaj nową książke ');
                $('.modal').modal('show');
                

            });
        });
    }
};
