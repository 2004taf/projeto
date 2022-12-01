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
    var action = $('form').attr('action');
    $('form').attr('action','process.php');
    // AJAX PART

    $("#submit").click(function(){
        $.post(action, jQuery('form').serialize(), function(data){
            $('.mensagem').html(data);
            $('.mensagem').show();
        });
        return null;
    });
});