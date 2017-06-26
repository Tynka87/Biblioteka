var authorView = {

    clearViewAuthor: function () {
        $('#authorlist option').remove();
        $('#authors fieldset .table tbody tr').remove();
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

                $('#authors fieldset .table tbody').append(newTable);
            }

        }, 'text');

    },

};
