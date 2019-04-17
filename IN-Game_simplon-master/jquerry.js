



     $(document).ready(function () {


           var element=$("p");
             console.log(element);
   
                element = $("#id_02");
                  console.log(element);
                 element = $(".blue");
   console.log(element );

   

               $("p").click(function () { 
                  alert  ("hello");
                 });

            $('#id_02').dblclick(function () {
        alert ("second page");
   })


         $('#id_02').mouseleave(function () { 
       
   });(function () {
    alert ("rasta");
 });
$('#strong').click(function(){  
    

               var text = $("#id_01").text();
               console.log("Premier console " + text);
              console.log($("text").text());
    $('#id_01').text("Aly");



    var love= $("id_01").text();
    console.log("second page" +text );
    console.log($("text").text());
    $('#id_01').text("la vie")

    $('#id_01').animate({left: '20000px'}, 4000, function(){alert("right")});





});



});






