$(document).ready(function(){
    $("button").click(function(){
    	var a = $("textarea").val();
        $("#new").append("<p>  </p>" + a);
    });
});