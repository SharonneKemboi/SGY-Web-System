
$(document).ready(function(){
    $("form#form34A").submit(function(event){
         // event.preventDefault();
          var name = $("input#name").val();
          var email = $("input#email").val();
          var comment = $("textarea#comment").val();
          var submit = $("textarea#submit").val();

          if ($("input#MERGE1").val() && $("input#MERGE0").val()){
              alert (name + ", we have received your message. Thank you for reaching out to us.");
          }
           else {
               alert("Please enter your name and email!");
              }

          });

      });
