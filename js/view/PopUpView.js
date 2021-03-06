var popUpView = {
	
	clearViewInPopUp: function () {
		$('.popUp .modal-body').remove();		
	},

	showBookInPopUp: function(book,index){		
		$('#gridSystemModalLabel').append(book.getTitle());			
		$(".modal-body #titleInPopUp").val(book.getTitle());
		$(".modal-body #year").val(book.getYear());
		$(".modal-body #index").val(index);		
		$(".modal-footer #send").val(index);
		$(".modal-footer #removeButton").val(index);
	},
	
	showAuthorsInPopUp: function (authors, book) {
		$('.modal-body #authorlist').append(prepareOptionList(authors));
		$(".modal-body #authorlist option[value='" + book.getAuthor() + "']").attr("selected", "selected");
        
	},
	
	showAuthorInPopUp: function(author,index){		
		$('#gridSystemModalLabel').append(author.getName()+ " " + author.getSurname());			
		$(".modal-body #id").val(author.getId());
		$(".modal-body #name").val(author.getName());
		$(".modal-body #surname").val(author.getSurname());	
		$(".modal-body #index").val(index);	
		$(".modal-footer #send2").val(index);
		$(".modal-footer #removeButtonInAuthor").val(index);
    
        
        
	}
   

};