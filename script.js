$(document).ready(function(){
    // criação de variáveis
    var state, effect = true;

    // criação da funcão darkmode
    $.fn.darkmode = function(){
        $("#img").click(function(){
            if (state){
                // animação  da muda de cor do body para dark mode
                $("body").animate({
                    "background-color": "black",
                    "color": "white",
                }, 1000);
                $("body").addClass("test");
                $(".mensagem").removeClass("mensagem").addClass("back");
                $(".port").removeClass("port").addClass("portu");
                $(".footer").removeClass("footer").addClass("footerw");
                $(".link_pt").removeClass("link_pt").addClass("link_ptw")
                img = "images/dark mode.png";
                $("#img").attr("src", img)

            } else {
                // animação  da muda de cor do body para white mode
                $("body").animate({
                    "background-color": "white",
                    "color": "black",
                }, 1000);
                $("body").removeClass("test");
                $(".back").removeClass("back").addClass("mensagem");
                $(".portu").removeClass("portu").addClass("port");
                $(".footerw").removeClass("footerw").addClass("footer");
                $(".link_ptw").removeClass("link_ptw").addClass("link_pt");
                img = "images/white mode.png";
                $("#img").attr("src", img)
            }
            state = !state;
        });
    }
    // chamada da função darkmode
    $("input[type=img]").darkmode();

    // AJAX PART
    var uName = $("input[name=user]").val();
    var passwrd = $("input[name=pass]").val();
    var dat = $("input[name=date").val();

    $("#formDetails").submit(function(){
        $.ajax({
            type: 'POST',
            url: 'process.php',
            data: $("form").serialize(),
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

    // animação do retângulo das informações do HTML para o PHP
    $('#btn').click(function(){
        if($("#mensagem").hasClass('mensagem')){
                $('.mensagem').show('clip', {direction: "vertical"}, 500).delay(3000).hide('clip', {direction: 'vertical'}, 500);
        } else {
            $('.back').show('clip', {direction: "vertical"}, 500).delay(3000).hide('clip', {direction: 'vertical'}, 500);
        }
    })

    // cenas da bandeira
    $("p").delegate('a', 'click', function(){
        if($("div").hasClass('port')){
            $(".port").css("background-color", "red");
        } else {
            $(".portu").css("background-color", "red");
        }
        
    });

    // mais cenas da bandeira
    $("#p_y").click(function(){
        $(this).prev().css("background-color", "green");
        $(this).css("background-color", "yellow");
    });

    // definição do print do datepicker
    $('#datepicker').datepicker({
        dateFormat: 'dd/mm/yy'
    })

    // audio stuff do easter egg
    $("#easter").on('click', function(){
        $('audio#song')[0].play();
        $('audio#song').prop('volume', 0.05);
        $('#back').show();
        $('#memeimg').fadeIn(1000);
        
    })

    // audio stuff do easter egg
    $("#back").click(function(){
        $('audio#song')[0].pause();
        $('#memeimg').fadeOut(1000);
        $('#back').hide();
    })

    // função draggable
    $( function() {
        $( "#draggable" ).draggable();
      } );

    // função datepicker
    $( function(){
        $("#datepicker").datepicker();
    });
});