var description;
window.onload = function() {
( function() { 	
		var  body = document.body;
		var content = document.body.children[0];
		var child = content.children[0];
		var div = child.children[2];
		description =  div.children[0];
	})();
}
function Hero(name, classe, intelligence, strength) {
    this.name = name;
    this.classe = classe;
    this.intelligence = intelligence;
    this.strength = strength;
    this.toString = function(name, classe, intelligence, strength) {
    	description.innerText +="Je suis "+capitalizeFirstLetter(this.name)+" le "+this.classe+", j'ai "+this.intelligence+" points d'intelligence et "+this.strength+" points de force !\n";
    };		    
}
function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}