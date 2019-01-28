window.onload = function() {
( function() { 	
		var content = document.body.children[0];
		var child = content.children[0];
		var div = child.children[2];
		var lorem = div.children[0];
		var person = "";				
		lorem.onclick = function(){
			while(1)			
			{
				person = "";
				while (person == "" || person == null) 
				{
			 		person = prompt("Quel est votre nom ?", "");
				}
				if(person != "" && person != null){
					var r = confirm("Etes vous sûr que "+person+" est votre nom ?");
				    if (r == true) {
				       lorem.innerText = "Bonjour "+person+" !";
				       break;
				    }
				    else
				    {
						continue;
				    }
				}
			}
		}
	})();
}