window.onload = function() {
( function() { 	
		var content = document.body.children[0];
		var child = content.children[0];
		var div = child.children[2];
		var divBut = div.children[1];
		var but = divBut.children[0];
		var but2 = divBut.children[1];
		var but3 = divBut.children[2];
		var lorem = div.children[0];
		var canvas = lorem.children[0];
		var audio = new Audio('https://wac.epitech.eu/www/racingjs/pony_song.ogg');			
		 if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
		    ctx.beginPath();
		    ctx.strokeStyle = "#fff";
		    ctx.moveTo(6, 6);
		    ctx.lineTo(14, 10);
		    ctx.lineTo(6, 14);
		    ctx.closePath();
		    ctx.stroke();
        }
     	canvas.onclick = function(){
			audio.play();
		}
		but.onclick = function(){
			audio.pause();
		}
		but2.onclick = function(){
			audio.pause();
			audio.currentTime = 0;
		}
		but3.onclick = function(){
			audio.muted = (audio.muted == true) ? false : true;
		}
	})();
}