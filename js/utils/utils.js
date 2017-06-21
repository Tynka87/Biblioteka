function prepareOptionList(authors){
	
	var optionList='';
	for (var i = 0; i < authors.length; i++) {
			optionList += ("<option value =" + authors[i].getId() + ">" + authors[i].getName() + " " + authors[i].getSurname() + "</option>");
		};
	return optionList;
	
};