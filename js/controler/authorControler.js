var authorControler = {


    init: function () {

        this.showFullAuthor();
        this.addNewAuthor();
        this.removeAuthor();

        $("body").on('submit', '#formAuthor', function () {
            //e.preventDefault();
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


        });

    },
    removeAuthor: function () {

        $(".popUp").on('click', '#removeButtonInAuthor', function () {
            var number = $(this).val();
            $('.modal ').modal('hide');
            console.log('działa' + number);
        });
    },

    showFullAuthor: function () {

        $("#authors").on('click', '.clickAuthor', function () {
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
                $('.modal').modal('show');
                $('#id').val(generatorId());

            });
        });
    }


};
