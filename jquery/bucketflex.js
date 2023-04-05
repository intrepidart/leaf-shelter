$(document).ready(function(){
    $("#p1").mouseenter(function(){
      alert("it's okay...it's one day at a time. you got this! (^ - ^ )/");
    });
  });

  
$(document).ready(function(){
    $("button").click(function(){
      $("#div1").fadeIn();
      $("#div2").fadeIn("slow");
      $("#div3").fadeIn(3000);
    });
  });

  
$( ".draggable" ).draggable();


$(document).ready(function(){
    $("form").submit(function(){
        var text = document.getElementById("myText").value; 
      alert("thank you for your message! it is making it's way to the headspace!" + text );

    });
  });


  $( function() {
    $( "#accordion" ).accordion({ heightStyle: "content"});
  
  } );

  $(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
  }); 


  $(document).ready(function(){
    $(".fading").click(function(){
      $(this).hide();
    });
  });
 