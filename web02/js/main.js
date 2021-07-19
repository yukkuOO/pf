$(function(){

    $("#wrap").fullpage({
        navigation: true,
        afterLoad: function(origin, destination, direction){
            $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
        },
    });


})