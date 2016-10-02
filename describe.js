var describeFunction = function(){
	return 'I am a CommonJS Module';
}

var exposedFunciton = function(){
	return describeFunction();
}

function jin(){
	this.firstname = 'titus';
	this.lastname = 'jin';
	this.exposeName = function(){
		return this.firstname+this.lastname;
	}	
}


/**
  * There is lots different method for the exports 
  * usage.
 **/
// var jin = new jinModule();
// jin.exposeName = function(){
// 	return this.firstname + this.lastname;
// }

module.exports = new jin();
