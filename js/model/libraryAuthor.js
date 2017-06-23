var libraryAuthor = {
    libraryAuthor: [],


    addAuthor: function (id, name, surname, index) {
        var author = new Author(id, name, surname);

        if (index == undefined) {
            this.libraryAuthor.push(author);
        } else {
            this.libraryAuthor.splice(index, 1, author);
        };

    },

    addAuthor2: function (_json) {

        var author = new Author(_json.id, _json.name, _json.surname);
        this.libraryAuthor.push(author);
    },

    addAuthors: function (_json) {
        for (var i = 0; i < _json.length; i++) {
            this.addAuthor2(_json[i]);
        }
    },

    getAuthors: function () {
        //console.log( this.libraryAuthor);
        return this.libraryAuthor;
    },

    getAuthor: function (id) {
        return a;
    },

    getAuthorInPopUp: function (number) {
        return this.libraryAuthor[number];
    },

    getAuthorInBookWithId: function (id, authors) {
        for (var i = 0; i < authors.length; i++) {
            if (id == authors[i].getId()) {
                return i;

            }
        };
    }

    /*   generatorId: function () {

           this.length = 8;
           this.timestamp = +new Date;

           function _getRandomInt(min, max) {
               return Math.floor(Math.random() * (max - min + 1)) + min;
           }

           var ts = this.timestamp.toString();
           var parts = ts.split("").reverse();
           var id = "";

           for (var i = 0; i < this.length; ++i) {
               var index = _getRandomInt(0, parts.length - 1);
               id += parts[index];
           }

           return id;
       }*/
    /* 
    {
	   
		return this.libraryAuthor[this.libraryAuthor.length-1].getId() + 1;
		
	}*/

};
