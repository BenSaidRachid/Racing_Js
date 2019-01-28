window.onload = function() {
( function() { 	
	var content = document.body.children[0];
	var child = content.children[0];
	var div = child.children[2];
	var input = div.children[0].children[0];
	var edit = div.children[1];
	var text = "";
	var i = 0;
	var index = 0;
	var color = "";
	var link = "";
	var count = 0;
	input.addEventListener('input', function (evt) {		
		text=this.value;
		text = text.replace("[B]", "<b>");		
		text = text.replace("[/B]", "</b>");	
		text = text.replace("[U]", "<u>");		
		text = text.replace("[/U]", "</u>");
		text = text.replace("[S]", "<s>");		
		text = text.replace("[/S]", "</s>");
		index = text.indexOf("[COLOR=");
		index += 7;		
		while(index < text.length)
		{			
			if(text[index] == ']')
			{
				break;
			}
			else
			{
				color += text[index];
			}
			index++;
		}
		count = text.indexOf("[COLOR=");
		count += 7;
		text = text.replace("[COLOR="+color+"]", "<font color='"+color+"'>");	
		text = text.replace("[/COLOR]", "</font>");
		index = text.indexOf("[LINK=");
		index += 6;
		while(index < text.length)
		{			
			if(text[index] == ']')
			{
				break;
			}
			else
			{
				link += text[index];
			}
			index++;
		}
		count = text.indexOf("[LINK=");
		count += 6;
		text = text.replace("[LINK="+link+"]", "<a href='"+link+"'>");	
		text = text.replace("[/LINK]", "</a>");
		color ="";
		link = "";
		edit.innerHTML = text;
	});
	})();
}