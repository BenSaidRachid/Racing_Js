
window.onload = function() {
( 
	function() {
	var content = document.body.children[0];
	var child = content.children[0];
	var div = child.children[2];
	var div2 = div.children[1];
	var lorem = div.children[0];
	var result = lorem.children[0];
	var button = lorem.children[1];
	var calcul=[];
	var a=0;
  	var b=0;  
	var res=0;
	var i=0;
	var after=0;
	var l=0;
	var tmp="";
	var flag = false;
	button.children[0].onclick = function(){
		result.innerText = result.innerText.slice(0, -1);
	}
	button.children[1].onclick = function(){
		result.innerText = "";	 
	}
	button.children[2].onclick = function(){
		if(result.innerText != "")
		{
			a=parseFloat(result.innerHTML);
		    calcul.push(a);
		    calcul.push("%");
		    result.innerText = "";
		    flag = false;
		}
		else
		{
			calcul.pop();
			calcul.push("%");
		}
	}
	button.children[3].onclick = function(){
		if(result.innerHTML != "")
		{
			a=parseFloat(result.innerHTML);
		    calcul.push(a);
		    calcul.push("/");
		    result.innerText = "";
		    flag = false;
		}
		else
		{
			calcul.pop();
			calcul.push("/");
		}
	}
	button.children[4].onclick = function(){
		if(flag)
		{
			flag = false;
			result.innerText = "";
			result.innerText = "7";	
		}
		else
			result.innerText += "7";	
	}
	button.children[5].onclick = function(){
		if(flag)
		{
			flag = false;
			result.innerText = "";
			result.innerText = "8";	
		}
		else
		result.innerText += "8";
	}
	button.children[6].onclick = function(){
		if(flag)
		{
			flag = false;
			result.innerText = "";
			result.innerText = "9";	
		}
		else
		result.innerText += "9";	
	}
	button.children[7].onclick = function(){
		if(result.innerHTML != "")
		{
			a=parseFloat(result.innerHTML);
		    calcul.push(a);
		    calcul.push("*");
		    result.innerText = "";
		    flag = false;
		}
		else
		{
			calcul.pop();
			calcul.push("*");
		}
	}
	button.children[8].onclick = function(){
		if(flag)
		{
			flag = false;
			result.innerText = "";
			result.innerText = "4";	
		}
		else
		result.innerText += "4";
	}
	button.children[9].onclick = function(){
		if(flag)
		{
			flag = false;
			result.innerText = "";
			result.innerText = "5";	
		}
		else
		result.innerText += "5";
	}
	button.children[10].onclick = function(){
		if(flag)
		{
			flag = false;
			result.innerText = "";
			result.innerText = "6";	
		}
		else
		result.innerText += "6";
	}
	button.children[11].onclick = function(){
		if(result.innerHTML != "")
		{
			a=parseFloat(result.innerHTML);
		    calcul.push(a);
		    calcul.push("-");
		    result.innerText = "";
		    flag = false;
		}
		else
		{
			calcul.pop();
			calcul.push("-");
		}
	}
	button.children[12].onclick = function(){
		if(flag)
		{
			flag = false;
			result.innerText = "";
			result.innerText = "1";	
		}
		else
		result.innerText += "1";
	}
	button.children[13].onclick = function(){
		if(flag)
		{
			flag = false;
			result.innerText = "";
			result.innerText = "2";	
		}
		else
		result.innerText += "2";
	}
	button.children[14].onclick = function(){
		if(flag)
		{
			flag = false;
			result.innerText = "";
			result.innerText = "3";	
		}
		else
		result.innerText += "3";
	}
	button.children[15].onclick = function(){		
		if(result.innerHTML != "")
		{
			a=parseFloat(result.innerHTML);
		    calcul.push(a);
		    calcul.push("+");
		    result.innerText = "";
		    flag = false;
		}
		else
		{
			calcul.pop();
			calcul.push("+");
		}
	}
	button.children[16].onclick = function(){
		if(flag)
		{
			flag = false;
			result.innerText = "";
			result.innerText = "0";	
		}
		else
		result.innerText += "0";	 
	}
	button.children[17].onclick = function(){
		if(flag)
		{
			flag = false;
			result.innerText = "";
			result.innerText = ".";	
		}
		else
		result.innerText += ".";	
	}
	button.children[18].onclick = function(){
		if(result.innerHTML != "")
		{			
			a=parseFloat(result.innerHTML);
			if(isNaN(a))
				res = 0;
			else					
				calcul.push(a);	
		}
		else
		{
			calcul.pop();
		}
		i=calcul.length;
	    after=0;
	    while(after<i)
	    {
          tmp=calcul[after];
         if(tmp==="*")
          {       
           l=after-1;
             after++;            
             tmp=calcul[l];           
             a=parseFloat(tmp);
            tmp=calcul[after];
             b=parseFloat(tmp);
             res=a*b;
            calcul.splice(l, 1,res);          
            calcul.splice(after, 1);
            l++;
             calcul.splice(l, 1);
             after = 0;
          }  
          else if(tmp==="/")
          {       
           l=after-1;
             after++;            
             tmp=calcul[l];           
             a=parseFloat(tmp);
            tmp=calcul[after];
             b=parseFloat(tmp);
             res=a/b;
            calcul.splice(l, 1,res);     
            calcul.splice(after, 1);
            l++;
             calcul.splice(l, 1);
             after = 0;
          }
          else if(tmp==="%")
          {       
           l=after-1;
             after++;            
             tmp=calcul[l];           
             a=parseFloat(tmp);
            tmp=calcul[after];
             b=parseFloat(tmp);
             res=a%b;
            calcul.splice(l, 1,res);         
            calcul.splice(after, 1);
            l++;
             calcul.splice(l, 1);
             after = 0;
          }        
         after++;
	    }	    
	    after=0;
	    res=0;
	    i=calcul.length;  
	    while(after<i)
        {
         tmp=calcul[after];
         if(tmp==="+")
         {
             after++;
             tmp=calcul[after];
             b=parseFloat(tmp);
             res+=b;
         }
         else if(tmp==="-")
         {
             after++;
             tmp=calcul[after];
             b=parseFloat(tmp);
             res-=b;
          }          
         else
         {
             res=parseFloat(tmp);
         }
         after++;
        }
	    flag = true;
      	result.innerText = res;
	    calcul=[];
	    res=0; 
	}
	})();
}