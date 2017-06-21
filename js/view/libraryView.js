var libraryView = {
    libraryView: [],

    clearView: function () {
        $('#library fieldset ul .col-md-4').remove();
    },

    showBooks: function (books, authors) {
        let nr = "";
        $.get('html/tile.html', (tile) => {
         
            for (var i = 0; i < books.length; i++) {
                nr = books[i].getAuthor() - 1;
                let newTile = tile;
                newTile = newTile.replace(/{{title}}/g, books[i].getTitle())
                                 .replace("{{name}}", authors[nr].getName())
                                 .replace("{{surname}}", authors[nr].getSurname())
                                 .replace("{{year}}", books[i].getYear())
                                 .replace("{{i}}", i);
               
                $('#library fieldset ul').append(newTile);
            }

        },'text');
        /*	for (var i = 0; i < books.length; i++) {

        		nr = books[i].getAuthor() - 1;		
        		$('#library fieldset ul').append("<div class='col-md-4'><li><button class='btn' value=" + i + ">Tytuł: " + books[i].getTitle() + "</button>" + "<p>Autor: " + authors[nr].getName() + " " + authors[nr].getSurname() + "</p>" + "<p>Rok wydania: " + books[i].getYear() + "</p>");

        	}*/
    },

    showAuthorsInBook: function (authors) {

        $('#authorlist').append(prepareOptionList(authors));
    },

};
