window.onload = function() {
( function() { 	
		var body = document.body;
		var content = document.body.children[0];
		var child = content.children[0];
		var div = child.children[2];
		var lorem = div.children[0];
		var button1 = lorem.children[0];
		var button2 = lorem.children[1];
		var list = lorem.children[2];
		var count = 16;
		var line = 1.4;
		var calue = "";
		button1.onclick = function(){
			count++;
			body.style.fontSize = count+"px";
			body.style.lineHeight = line+"em";
		}
		button2.onclick = function(){
			if(count > 0)
			{	
				count--;
			}
			body.style.fontSize = count+"px";			
			body.style.lineHeight = line+"em";
		}
		list.onchange = function(){
			value = list.value;
			body.style.background = value;
		}
	})();
}