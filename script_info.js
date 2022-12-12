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

   function highlight(){
      $(".port").find(".highlight").removeClass("highlight");

    var searchword = $("txtBox").val();

    var custfilter = new RegExp(searchword, "ig");
    var repstr = "<span class='highlight'>" + searchword + "</span>";

    if (searchword != "") {
        $('body').each(function() {
            $(this).html($(this).html().replace(custfilter, repstr));
        })
    }
   }

   
})