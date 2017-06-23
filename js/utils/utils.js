function prepareOptionList(authors) {

    var optionList = '';
    for (var i = 0; i < authors.length; i++) {
        optionList += ("<option value =" + authors[i].getId() + ">" + authors[i].getName() + " " + authors[i].getSurname() + "</option>");
    };
    return optionList;

};


/*function getAuthorInBook(id, authors) {
    for (var i = 0; i < authors.length; i++) {
        if (id == authors[i].getId()) {
            return i;

        }
    };
};*/

function generatorId () {

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
    };
