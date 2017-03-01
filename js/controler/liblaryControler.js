var liblaryControler = {

	init: function () {
		
	
 	this.editBook();
 	this.closePopUp();
	this.removeBook();

/*		$("#formBook").submit(function (e) {
			e.preventDefault();
			var title = $("#title").val();
			var author = $("#authorlist option:selected").val();
			var year = $("#year").val();



			liblary.addBook(title, author, year);			localStorageService.addLiblarytoLocalStor(liblary.getBooks());		
			liblaryView.clearView();			liblaryView.showBooks(liblary.getBooks(),liblaryAuthor.getAuthors()); 


		});*/
		
			$("body").on('submit', '#formBook',function () {
			//e.preventDefault();
			var index = undefined;
			var title = $(this.title).val();
			var author = $(this.authorlist).val();
			var year = $(this.year).val();
			index = $(this.index).val();

			liblary.addBook(title, author, year, index);			localStorageService.addLiblarytoLocalStor(liblary.getBooks());	
				
			liblaryView.clearView();			liblaryView.showBooks(liblary.getBooks(),liblaryAuthor.getAuthors()); 
				


		});
	

	},
	removeBook: function () {

		$("#library").on('click', '.removeBook', function () {
			var number = $(this).val();
			console.log(number);


			liblary.removeBook(number);
			localStorageService.addLiblarytoLocalStor(liblary.getBooks());
			liblaryView.clearView();		liblaryView.showBooks(liblary.getBooks(),liblaryAuthor.getAuthors());

		});

	},
	editBook: function () {

		$("#library").on('click', '.editBook', function () {
			var number = $(this).val();
			console.log(number);
			$('.popUp').load('html/editBook.html', function () {


				popUpView.renderEditBook(liblary.getBook(number),number);
				popUpView.showAuthorsInPopUp(liblaryAuthor.getAuthors(), liblary.getBook(number));

			});




		});

	},
	closePopUp: function () {

		$(".popUp").on('click', '#cross', function () {
			console.log("test");
			$('.popUp .tooltip').remove();


		});

	}


};