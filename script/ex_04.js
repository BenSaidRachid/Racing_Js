window.onload = function() {
( function() { 	
	var content = document.body.children[0];
	var child = content.children[0];
	var div = child.children[2];
	var lorem = div.children[0];
	var string = "";		
	document.onkeypress = function(e) {
		 key = e.which;
		   if(key >= 32 && key <= 126)
		   {		   		
		    	if(string.length == 42)
	    		{
	    			string = string.substring(1);
	    		}
		    	string += String.fromCharCode(key);
		    	lorem.innerText = string;			    
		   }
		};				
	})();
}