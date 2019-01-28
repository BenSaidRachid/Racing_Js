
window.onload = function() {
( 
	function() {
	var content = document.body.children[0];
	var child = content.children[0];
	var div = child.children[2];
	var div2 = div.children[1];
	var lorem = div.children[0];
	var canvas = lorem.children[0];
	var newX = 0, newY = 0;
	canvas.draggable =true;
	canvas.style.position = "relative";	
	canvas.addEventListener('dragstart', function(e) {
	  	e.dataTransfer.setData('text', "");
		postionX = e.pageX;
		postionY = e.pageY;
	});
	lorem.addEventListener('dragover', function(e) {
   		e.preventDefault();
   		var x = e.screenX,
		    y = e.screenY; 
   		div2.innerText = "Nouvelles coordonnées => {x:"+x+", y:"+y+"}";	 
	});
	lorem.addEventListener('drop', function(e) {		
    	e.preventDefault();
    	newX += postionX - e.pageX;
    	newY += postionY - e.pageY;
    	canvas.style.bottom = newY+"px";	
    	canvas.style.right = newX+"px";
	});
	lorem.addEventListener('dragend', function(e) {
   		e.preventDefault(); 
		var x = e.screenX,
		    y = e.screenY; 
   		div2.innerText = "Nouvelles coordonnées => {x:"+x+", y:"+y+"}";	 
	});	
	})();
}