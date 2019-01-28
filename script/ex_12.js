window.onload = function() {
   (function() {
       var content = document.body.children[0];
       var child = content.children[0];
       var div = child.children[2];
       var lorem = div.children[0];
       var img = "https://wac.epitech.eu/www/racingjs/pangolin.jpg";
       var xhr = new XMLHttpRequest();
       xhr.open('get', img, true);
       xhr.responseType = 'blob';
       xhr.onload = function() {
           var reader = new FileReader();
           reader.readAsDataURL(xhr.response);
           reader.onload = function(e) {
               var url = e.target.result;
               lorem.innerHTML = '<img src="' + url +
                   '" width="100%" height="100%"/>';
               MyImage = lorem.children[0];
               imgData = getBase64Image(MyImage);
               localStorage.setItem("pangolin", imgData);
           };
       };
       xhr.send();
   })();
}

function getBase64Image(img) {
   var canvas = document.createElement("canvas");
   canvas.width = img.width;
   canvas.height = img.height;
   var ctx = canvas.getContext("2d");
   ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
   var dataURL = canvas.toDataURL("image/png");
   return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}