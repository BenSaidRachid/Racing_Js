window.onload = function() {
    (function() {
        var body = document.body;
        var content = document.body.children[0];
        var child = content.children[0];
        var div = child.children[2];
        var number = div.children[1];
        var num = 1;
        var top = 360;
        var square = div.children[2];
        var margin = 0;
        square.onclick = function()
        {
            num++;
            number.innerText=num;
            if(top < 1129)
            {
                top+=2.5;
                square.style.top =top+"px" 
            }           
            if(margin > -20)
            {
                margin-=2.5;
                number.style.marginTop =margin+"px" 
            }
            
            if(num > 9)
            {
               minus =  setInterval(function() {     
                    if(top > 1129)
                    {
                        clearInterval(minus)
                    }
                    else
                    {                        
                        top++;
                        square.style.top =top+"px" 
                    }               
                }, 100); 
            }            
        }        
    })();
}