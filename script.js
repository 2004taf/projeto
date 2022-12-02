$(document).ready(function(){
    $.fn.darkmode = function(){
        $("#img").click(function(){
            var img;

            if($(this).attr("src") == "images/white mode.png"){
                img = "images/dark mode.png";
                $(this).attr("src", img)
                $("body").addClass("test");
                $(".mensagem").addClass("back").removeClass("mensagem");
            } else {
                img = "images/white mode.png";
                $(this).attr("src", img)
                $("body").removeClass("test").removeClass("body");
                $(".back").removeClass("back").addClass("mensagem");
            }
        });
    }
    $("input[type=img]").darkmode();
    // AJAX PART
    var uName = $("input[name=user]").val();
    var passwrd = $("input[name=pass]").val();
    $("#formDetails").submit(function(){
        $.ajax({
            type: 'POST',
            url: 'process.php',
            data: {"username": uName, "password": passwrd},
            success : function(data) {
                $('.mensagem').html(data);
                $('.mensagem').show();
           },
            error: function (xhr,ajaxOptions,throwError){
                alert("erro");
          },
        });
        return false;
    });

    $( function() {
        $( "#draggable" ).draggable();
      } );
});