window.onload = function() {
    (function() {
        var body = document.body;
        var content = document.body.children[0];
        var child = content.children[0];
        var div = child.children[2];
        var lorem = div.children[0];
        var form = lorem.children[0];
        var input = form.children[0];
        var submit = form.children[1];
        form.action = "upload.php"
        form.method = "post"
        form.enctype="multipart/form-data"
        submit.onclick=function()
        {
            var file_data = input.prop('files')[0];   
            var form_data = new FormData();                  
            form_data.append('file', file_data);
            alert(form_data);                             
            $.ajax({
                        url: 'upload.php', // point to server-side PHP script 
                        dataType: 'text',  // what to expect back from the PHP script, if anything
                        cache: false,
                        contentType: false,
                        processData: false,
                        data: form_data,                         
                        type: 'post',
                        success: function(php_script_response){
                            alert(php_script_response); // display response from the PHP script, if any
                        }
             });
        }
        
        console.log(submit)
    })();
}