var authorControler = {
	

	init: function () {
		
		this.showFullAuthor();
        this.addNewAuthor();

		$("body").on('submit', '#formAuthor', function () {
			//e.preventDefault();
			var index = undefined;
			var id = libraryAuthor.generatorId();			
			var name = $(this.name).val();
			var surname = $(this.surname).val();
			index = $(this.index).val();
			//var dateOfBirth = $("#dateOfBirth").val();	

			libraryAuthor.addAuthor(id, name, surname, index);
			localStorageService.addAuthortoLocalStor(libraryAuthor.getAuthors());
			authorView.clearViewAuthor();			libraryView.showAuthorsInBook(libraryAuthor.getAuthors());


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
            console.log('przeszlo');
            $('.popUp').load('html/showFullAuthor.html', function () {
                console.log('krok2');
                $('.modal').modal('show');

            });
        });
    }
	

};