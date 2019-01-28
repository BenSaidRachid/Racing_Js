window.onload = function() {
    (function() {
        var body = document.body;
        var content = document.body.children[0];
        var child = content.children[0];
        var div = child.children[2];
        var lorem = div.children[0];
        lorem.addEventListener('pangolin', function(e) {
         timer();
        });
        function timer()
        {
          setInterval(function() {     
              lorem.style.background = getRandomColor();
            }, 1000);
        }
        function getRandomColor() {
          var letters = '0123456789ABCDEF';
          var color = '#';
          for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
        }
    })();
}