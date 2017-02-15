function Author(id,name,surname){
	this.id = id;
	this.name = name;		
	this.surname = surname;
	//this.dateOfBirth = dateOfBirth;
	

};


Author.prototype.getId = function(){
	return this.id;
}

Author.prototype.getName = function(){
	return this.name;
}

Author.prototype.getSurname = function(){
	return this.surname;
}

/*Author.prototype.getDateOfBirth = function(){
	return this.dateOfBirth;
}*/