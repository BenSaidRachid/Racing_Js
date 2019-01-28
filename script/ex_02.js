window.onload = function() {
( function() { 
		var content = document.body.children[0];
		var child = content.children[0];
		var div = child.children[2];
		var lorem = div.children[0];
		var count = 1;
		lorem.onclick = function(){
				lorem.innerText = count++;
		}
		} ) ();
}