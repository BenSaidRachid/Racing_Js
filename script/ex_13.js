window.onload = function() {
( function() { 	
	var content = document.body.children[0];
	var child = content.children[0];
	var div = child.children[2];
	var lorem = div.children[0];
	var img = localStorage.getItem("pangolin");
	var width = 100;
	var height = 100;
	var minus;
	var plus;
  	if(img !== null)		
  	{
  		lorem.innerHTML = '<img src="" width="100%" height="100%"/>';  	
  		lorem.children[0].src = "data:image/png;base64," + img;
  		lorem.children[0].onclick= function() {
  		lorem.children[0].parentNode.removeChild(lorem.children[0]);
		localStorage.removeItem('pangolin');
	  	}
	  	lorem.children[0].onmouseover= function() {
	  		clearInterval(plus)
	  		minus =  setInterval(function() {     
	  			width--;
		  		height--;
		  		lorem.children[0].style.width =width+"%" 
		  		lorem.children[0].style.height =height+"%" 
			}, 1000);
	  	}
	    lorem.children[0].onmouseout = function() {
	        clearInterval(minus)
	        plus =  setInterval(function() {       				  		
		  		if(width > 100 && height > 100)
		  		{
		  			clearInterval(plus)
		  		}
		  		else
		  		{
		  			width++;
		  			height++;
		  			lorem.children[0].style.width =width+"%" 
		  			lorem.children[0].style.height =height+"%" 
		  		}
			}, 1000);
	  	}
	  }  	
	})();
}