function Book(title,author,year){
	this.title = title;		//jak zrobić żeby te pola były ukryte(zmienne prywatne)
	this.author = author;
	this.year = year;
	
};

Book.prototype.getTitle = function(){
	return this.title;
}

Book.prototype.getAuthor = function(){
	return this.author;
}

Book.prototype.getYear = function(){
	return this.year;
}