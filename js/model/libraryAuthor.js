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
        var myString = author.trim();
        var authorTable = myString.split(/\s* \s*/).filter(s => s.length > 0);
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

        let comparator = this.buildComparator(author);

        if (flag == 0) {
            $("#" + author).val("1");
            return this.libraryAuthor.sort(comparator);
        } else {
            $("#" + author).val("0");
            return this.libraryAuthor.sort(comparator).reverse();
        }

    },
    
    buildComparator: function (author) {
        switch (author) {
            case 'id':
                return (a1, a2) => a1[author] - a2[author];
            case 'name':
            case 'surname':
                return (a1, a2) => a1[author].localeCompare(a2[author]);

        };

    }
    /*,
        stringComperator: function (a1, a2) {
            return a1[author].localeCompare(a2[author]);
        },
        numberComperator: function (a1, a2) {
            return a1 - a2;
        }
    */
};
