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
        return this.libraryAuthor;
    },

    getAuthor: function (id) {
        console.log(this.libraryAuthor.length);
        let author;
        this.libraryAuthor.forEach((a) => {
            console.log("autor id " + a.getId() + ", typ: " + typeof a.getId());
            console.log("szukane id " + id + ", typ: " + typeof id);
            if (a.getId() === id) {
                console.log("znalazl a:" + JSON.stringify(a));
                author = a;
            }
        });
        if (!author) {
            return new Author(id, "nie", "ma");
        }
        return author;
    },

    removeAuthor: function (number) {
        this.libraryAuthor.splice(number, 1);
    },

    getAuthorInPopUp: function (number) {
        return this.libraryAuthor[number];
    },
    getAuthorInTable: function (author) {
        var myString = author;
        var authorTable = myString.split(/\s* \s*/);
        return authorTable;
    },
    searchAuthors: function (search) {
        var authorsSet = new Set();
        var authorsSet2 = new Set();
        let newArrayAuthors;
        search.forEach((item) => {

            this.libraryAuthor.forEach((author) => {
                if (author.getName().toLowerCase().includes(item.toLowerCase())) {
                    authorsSet.add(author);
                }
            });
            this.libraryAuthor.forEach((author) => {
                if (author.getSurname().toLowerCase().includes(item.toLowerCase())) {
                    authorsSet.add(author);
                }
            });
            newArrayAuthors = Array.from(authorsSet);

        });

//        if (authorsSet.size >= 2) {
//                console.log('weszło stara '+ this.libraryAuthor);
//            console.log('weszło '+ newArrayAuthors );
//            search.forEach((item) => {
//                newArrayAuthors.forEach((author) => {
//                    if (author.getSurname().toLowerCase().includes(item.toLowerCase())) {
//                        authorsSet2.add(author);
//                    }
//                });
//                
//               newArrayAuthors = Array.from(authorsSet2);
//            });
//        }

        return newArrayAuthors;
    }

};
