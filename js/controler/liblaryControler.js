var liblaryControler = {

	init: function () {

		$("#send").click(function () {
			//e.preventDefault();
			var title = $("#title").val();
			var author = $("#authorlist option:selected").val();
			var year = $("#year").val();



			liblary.addBook(title, author, year);
			localStorageService.addLiblarytoLocalStor(liblary.getBooks());
			liblaryView.clearView();
			liblaryView.showBooks(liblary.getBooks());


		});

	},
	removeBook: function () {

		$("#library").on('click', '.removeBook', function () {
			var number = $(this).val();
			console.log(number);


			liblary.removeBook(number);
			localStorageService.addLiblarytoLocalStor(liblary.getBooks());
			liblaryView.clearView();
			liblaryView.showBooks(liblary.getBooks());

		});

	},
	editBook: function () {

		$("#library").on('click', '.editBook', function () {
			var number = $(this).val();
			console.log(number);
			$('.popUp').load('html/editBook.html', function(){
				liblaryView.editBook(liblary.getBook(number));
			});
			//liblary.getBook(number);


			

		});

	},
	cross: function () {

		$(".popUp").on('click', '#cross', function () {
			console.log("test");
			$('.popUp .tooltip').remove();


		});

	}


};