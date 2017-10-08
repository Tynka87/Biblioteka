var authorControler = {


    init: function () {

        this.showFullAuthor();
        this.addNewAuthor();
        this.removeAuthor();
        this.searchAuthors();
        this.clearSearchAuthors();
        this.sortAuthors();

        $("body").on('submit', '#formAuthor', function (e) {
            e.preventDefault();
            var index;
            var id = parseInt($(this.id).val());
            var name = $(this.name).val();
            var surname = $(this.surname).val();
            index = $(this.index).val();
            //var dateOfBirth = $("#dateOfBirth").val();	

            libraryAuthor.addAuthor(id, name, surname, index);
            localStorageService.addAuthortoLocalStor(libraryAuthor.getAuthors());
            authorView.clearViewAuthor();
            libraryView.showAuthorsInBook(libraryAuthor.getAuthors());
            authorView.showAuthors(libraryAuthor.getAuthors());
            $('.modal').modal('hide');
        });

    },
    removeAuthor: function () {

        $(".popUp").on('click', '#removeButtonInAuthor', function (e) {
            e.preventDefault();
            let number = $(this).val();
            let authorId = libraryAuthor.getAuthors()[number].getId();
            if (library.isBookWithAuthor(authorId)) {
                $(".alert").show();
                console.log('jest książka');
            } else {
                $('.modal').modal('hide');
                libraryAuthor.removeAuthor(number);
                localStorageService.addAuthortoLocalStor(libraryAuthor.getAuthors());
                authorView.clearViewAuthor();
                authorView.showAuthors(libraryAuthor.getAuthors());
            }
        });
    },

    showFullAuthor: function () {

        $("#authors").on('click', '.clickAuthor', function (e) {
            e.preventDefault();
            let number = $(this).data('id');
            $('.popUp').load('html/showFullAuthor.html', function () {
                $('.modal ').modal('show');
                popUpView.showAuthorInPopUp(libraryAuthor.getAuthorInPopUp(number), number);
            });
        });
    },

    addNewAuthor: function () {

        $(".widget-author").on('click', 'a', function () {
            $('.popUp').load('html/showFullAuthor.html', function () {
                $('.form-group #index').remove();
                $('.modal-footer .btn-default').remove();
                $('.modal').modal('show');
                let gen = generatorId();
                console.log(gen);
                $('.modal-body #id').val(gen);

            });
        });

    },
    searchAuthors: function () {
        $(document).on('submit', '#searchAuthor', function (e) {
            e.preventDefault()
            let searchAuthor = $(this.searchAuthor).val();

            let authorTable = libraryAuthor.getAuthorInTable(searchAuthor);
            let authorsSet = libraryAuthor.searchAuthors(authorTable);
            console.log(authorsSet);
            authorView.clearViewAuthor();
            authorView.showAuthors(authorsSet);

        });
    },
    clearSearchAuthors: function () {
        $("#authors").on('click', '#searchAuthorSpan', function () {
            $("#authors fieldset legend input#searchAuthor.form-control").val("");
            authorView.clearViewAuthor();
            authorView.showAuthors(libraryAuthor.getAuthors());
        });
    },
    sortAuthors: function () {
        $("#authors").on('click', '.sort', function (e) {
            e.preventDefault()
            let author = $(this).data("author");
            let flag = $(this).val();
            let sortName = libraryAuthor.sortAuthors(author,flag);
            authorView.clearViewAuthor();
            authorView.showAuthors(sortName);
        });
    }

};
