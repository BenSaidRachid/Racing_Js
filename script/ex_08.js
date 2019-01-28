window.onload = function() {
( function() { 	
		var content = document.body.children[0];
		var child = content.children[0];
		var div = child.children[2];
		var lorem = div.children[0];
		var i = 0;
		var canvas =lorem.children
		var orange = 0;
		var violet = 0;
		var noir = 0;
		var vert = 0;
		var count_o = 0;
		var count_p = 0;
		var count_b = 0;
		var count_g = 0;
		lorem.style.display = "flex";
		lorem.style.flexDirection = "row";
		lorem.style.justifyContent = "center";
		lorem.style.alignContent = "center";
		while(i < canvas.length)
		{		
			switch(window.getComputedStyle(canvas[i]).getPropertyValue("background-color"))
			{
				case  "rgb(0, 0, 0)":
					count_b++;
				break;
				case  "rgb(255, 165, 0)":
					count_o++;
				break;
				case "rgb(128, 128, 0)":
					count_g++;
				break;
				case  "rgb(128, 0, 128)":
					count_p++;
				break;
			}
			i++;
		}
		i = 0;
		violet += count_o;
		noir += count_p + count_o;
		vert += count_p + count_o + count_b;		
		while(i < canvas.length)
		{		
			switch(window.getComputedStyle(canvas[i]).getPropertyValue("background-color"))
			{
				case  "rgb(0, 0, 0)":
					noir++;
					canvas[i].style.order = noir;
				break;
				case  "rgb(255, 165, 0)":
					orange++;
					canvas[i].style.order = orange;
				break;
				case "rgb(128, 128, 0)":
					vert++;
					canvas[i].style.order = vert;
				break;
				case  "rgb(128, 0, 128)":
					violet++
					canvas[i].style.order = violet;
				break;
			}
			i++;
		}
	})();
}