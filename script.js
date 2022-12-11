$(document).ready(function(){
    // criação de variáveis
    var state, effect = true;


    // definição do print do datepicker
    $('#datepicker').datepicker({
        dateFormat: 'dd/mm/yy'
    })

    // função draggable
    $( function() {
        $( "#draggable" ).draggable();
      } );

    // função datepicker
    $( function(){
        $("#datepicker").datepicker();
    });

    // cenas da bandeira
    $("p").delegate('a', 'click', function(){
        if($("div").hasClass('port')){
            $(".port").css("background-color", "red");
        } else {
            $(".portu").css("background-color", "red");
        }
        
    });

    // mais cenas da bandeira
    $("p_y").click(function(){
        $(this).prev().css("background-color", "green");
        $(this).css("background-color", "yellow");
    });

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
    $("#formDetails").submit(function(){
        $.post('process.php', $("#formDetails").serialize())
           .done(function(data) {
                $('.mensagem').html(data);
                $('.mensagem').show();
                window.location.href = 'informacoes.html';
        });
    });
});