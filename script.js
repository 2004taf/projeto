$(document).ready(function(){
    var state = true;
    $.fn.darkmode = function(){
        $("#img").click(function(){
            if (state){
                $("body").animate({
                    "background-color": "black",
                    "color": "white",
                }, 1000);
                img = "images/dark mode.png";
                $("#img").attr("src", img)
                $("body").addClass("test");
                $(".mensagem").removeClass("mensagem").addClass("back");
                $(".port").removeClass("port").addClass("portu");

            } else {
                $("body").animate({
                    "background-color": "white",
                    "color": "black",
                }, 1000);
                img = "images/white mode.png";
                $("#img").attr("src", img)
                $("body").removeClass("test");
                $(".back").removeClass("back").addClass("mensagem");
                $(".portu").removeClass("portu").addClass("port");
            }
            state = !state;
        });
    }
    $("input[type=img]").darkmode();
    // AJAX PART
    var uName = $("input[name=user]").val();
    var passwrd = $("input[name=pass]").val();
    var dat = $("input[name=date").val();
    $("#formDetails").submit(function(){
        $.ajax({
            type: 'POST',
            url: 'process.php',
            data: {"user": uName, "pass": passwrd, "date": dat},
            success : function(data) {
                if($("#mensagem").hasClass('mensagem')){
                    $(".mensagem").html(data);
                    $(".mensagem").show();
                } else {
                    $(".back").html(data);
                    $(".back").show();
                }
                    
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

    $( function(){
        $("#datepicker").datepicker();
    });

    $('#btn').click(function(){
        if($("#mensagem").hasClass('mensagem')){
            $('.mensagem').toggle('clip');
        } else {
            $('.back').toggle('clip');
        }
    })

    $("#link_p").click(function(){
        if($("div").hasClass('port')){
            $(".port").css("background-color", "red");
        } else {
            $(".portu").css("background-color", "red");
        }
        
    });


    $("#p_y").click(function(){
        $(this).prev().css("background-color", "green");
        $(this).css("background-color", "yellow");
    });
});