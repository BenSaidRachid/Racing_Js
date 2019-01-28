function myFunction()
{
	var content = document.body.children[0];
	var child = content.children[0];
	var div = child.children[2];
	var lorem = div.children[0];
	var link = lorem.children[0];
	var lorem2 = div.children[1];
   	lorem2.parentNode.removeChild(lorem2);
   	lorem.style.color = 'black'; 
   	link.style.visibility = "visible";
	delete_cookie("acceptsCookies");
}	
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}	
function delete_cookie( name ) {
		setCookie(name,"",-1);
}
window.onload = function() {
( 

	function() { 
		var content = document.body.children[0];
		var child = content.children[0];
		var div = child.children[2];
		var div2;
		var btn;
		var button;
		var lorem = div.children[0];
		var lorem2;
		var flag = false;
		var link = lorem.children[0];
		if(document.cookie==="acceptsCookies=true")
		{
			hide();
		}	
		link.onclick = function(){
			setCookie("acceptsCookies", true, 1);
			if(document.cookie==="acceptsCookies=true")
			{
				hide();
			}			
		}		
		function hide()
		{
			lorem.style.color = 'white'; 	
			link.style.visibility = "hidden";
			div2 = document.createElement("DIV");			
		  	div2.innerHTML= "<button onclick=myFunction()>Supprimer le cookie</button>";		   
			div.appendChild(div2);
			lorem2 = div.children[1];
			button =  lorem2.children[0];
			flag = true;	
		}
		
	})();
}