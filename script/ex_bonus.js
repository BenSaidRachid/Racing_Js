function $($elem) { 
	recur();
	/*var element = doc[1];
	var test = element.childElementCount;	
	var array = [];
	if(test != 0)
	{
		var rec = element.children;
		for(let i = 0; i < rec.length; i++)
		{
			array.push(rec[i]);
		}
	}	*/
}
function recur($elem)
{
	var doc = document.body.children;	
	var array = [];
	for(let i = 0; i < doc.length; i++)
	{
		console.log(doc);
	}
}
window.onload = function() {
$("div"); 
}