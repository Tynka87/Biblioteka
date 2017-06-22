var authorView = {

	clearViewAuthor: function () {
		$('#authorlist option').remove();
		$('#library fieldset ul .col-md-4').remove();		
	},


	showAuthors: function (authors) {
        
        
              $.get('html/tableAuthor.html', (table) => {
         
            for (var i = 0; i < authors.length; i++) {
              let newTable = table;
                newTable = newTable.replace("{{i}}", i)
                                 .replace("{{i}}", i)
                                 .replace("{{id}}", authors[i].getId())
                                 .replace("{{name}}", authors[i].getName())
                                 .replace("{{surname}}", authors[i].getSurname());
                                 
              
                $('#authors fieldset .table thead').append(newTable);
            }

        },'text');
		
/*		for (var i = 0; i < authors.length; i++) {
			
			$('#authors fieldset ul').append("<div class='col-md-4'><li><button class='btn' value=" + i + ">ID: " + authors[i].getId() + "</button>" + "<p>Imię: " + authors[i].getName() + "</p>" + "<p>Rok wydania: " +authors[i].getSurname() + "</p>");

		}*/
	},

};