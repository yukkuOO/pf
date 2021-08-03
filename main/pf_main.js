$(function(){


    $("#main").fullpage({
        anchors:['xm01','xm02','xm03','xm04','xm05','xm06','xm07'],
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
    
    



})