$(function(){


    $("#main").fullpage({
        anchors:['xm01','xm02','xm03','xm04','xm05','xm06','xm07','xm08'],
        afterLoad: function(origin,destination, direction){
            $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
            $("nav li").eq(destination.index).addClass("on").siblings().removeClass("on");
            if(destination.index===4) {
                $("footer").css({color:"#333"})
            }else {
                $("footer").removeAttr("style")
            }
        },

    });



    $("#mopen").on("click",function(){
        $(this).toggleClass("on");
       $("#cover_nav").toggleClass("on");
    });



    $("#cover_nav .link a").on("click",function(){
        $("#cover_nav").removeClass("on");
        $("#mopen").removeClass("on");
    });
    
    
    $(".artworkli").slick({
        arrows:false,
        dots:true,
        slidesToShow: 3,
        
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                
    
              }
            },
        ]
    });


    $(".pf07 .arr .xi-angle-left-min").on("click",function(){
        $(".artworkli").slick("slickPrev");
    });
    $(".pf07 .arr .xi-angle-right-min").on("click",function(){
        $(".artworkli").slick("slickNext");
    });


})