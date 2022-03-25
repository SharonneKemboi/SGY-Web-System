
$(document).ready(function(){
//form validation

$("form#form").submit(function(event){
    // event.preventDefault();
   var name = $("input#name").val();
   var email = $("input#email").val();
   var message = $("textarea#message").val();

   if ($("input#name").val() && $("input#email").val()){
   alert ("Thank You  " + name + ", For Sending SGY A Message, We Shall Get Back To You ASAP!!");
   }
   else {
       alert("Please enter your name and email!");
   }
     
});


});
