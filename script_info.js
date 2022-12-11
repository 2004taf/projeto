$(document).ready(function(){
   $('#dados').load('process.php');
   $('#dados').show();

   $('#highlight').click(function(){
      $(".port").css("color", "red");
   })

   $('#amarilo').click(function(){
      $('p').first().css("color", "green");
      $(this).css("color", "yellow");
   })
})