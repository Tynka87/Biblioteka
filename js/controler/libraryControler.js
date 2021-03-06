var libraryControler = {

    init: function () {

        this.showFullBook();
        this.removeBook();
        this.addNewBook();
        this.searchBooks();
        this.clearSearchBooks();




        $("body").on('submit', '#formBook', function () {
            //e.preventDefault();
            let index;
            let title = $(this.title).val();
            let author = parseInt($(this.authorlist).val());
            let year = $(this.year).val();
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

        $(".popUp").on('click', '#removeButton', function () {
            let number = $(this).val();
            $('.modal').modal('hide');
            library.removeBook(number);
            localStorageService.addlibrarytoLocalStor(library.getBooks());
            libraryView.clearView();
            libraryView.showBooks(library.getBooks(), libraryAuthor.getAuthors());
        });
    },

    showFullBook: function () {

        $("#library").on('click', '.item-delete', function () {
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
                $('.form-group #index').remove();
                $('#gridSystemModalLabel').append('Dodaj nową książke ');
                libraryView.showAuthorsInBook(libraryAuthor.getAuthors());
                $('.modal-footer .btn-default').remove();
                $('.modal').modal('show');


            });
        });
    },
    searchBooks: function () {
        $(document).on('submit', '#search', function (e) {
            e.preventDefault()
            let search = $(this.search).val();
            let books = library.searchBooks(search);
            libraryView.clearView();
            libraryView.showBooks(books, libraryAuthor.getAuthors());
        });
    },
    clearSearchBooks: function () {
        $("#library").on('click', '#searchSpan', function () {
            
            $("#library fieldset legend input#search.form-control").val("");
            libraryView.clearView();
            libraryView.showBooks(library.getBooks(), libraryAuthor.getAuthors());
        });
    }
};
