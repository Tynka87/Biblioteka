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
        let author;
        this.libraryAuthor.forEach((a) => {
            if (a.getId() === id) {
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
        if (search.length === 1) {
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
        } else {
            search.forEach((item) => {

                this.libraryAuthor.forEach((author) => {
                    if (author.getName().toLowerCase().includes(item.toLowerCase())) {
                        search.forEach((item) => {
                            if (author.getSurname().toLowerCase().includes(item.toLowerCase())) {
                                authorsSet.add(author);
                            }
                        })
                    }

                });
            });
            if (authorsSet.size === 0) {
                search.forEach((item) => {

                    this.libraryAuthor.forEach((author) => {
                        if (author.getSurname().toLowerCase().includes(item.toLowerCase())) {
                            search.forEach((item) => {
                                if (author.getName().toLowerCase().includes(item.toLowerCase())) {
                                    authorsSet.add(author);
                                }
                            })
                        }

                    });
                });

            }
            newArrayAuthors = Array.from(authorsSet);
        }

        return newArrayAuthors;
    },
    sortAuthors: function (author, flag) {

        if (flag == 0) {
            $("#" + author).val("1");
            return this.libraryAuthor.sort((a1, a2) => a1[author].localeCompare(a2[author]));
        } else {
            $("#" + author).val("0");
            return this.libraryAuthor.sort((a1, a2) => a2[author].localeCompare(a1[author]));
        }


    }

};
