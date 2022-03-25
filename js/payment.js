$(document).ready(function(){

    
    $("#btn2").click(function() {
        $("#btn2").hide();
        $(".para").show();
    });
    $(".para").click(function() {
        $(".para").hide();
        $("#btn2").show();
    });

    $("#btn1").click(function(){
        $(".form-wrapper").show();
    });

   $("#btn1").dblclick(function(){
        $(".form-wrapper").hide();
    });
});

