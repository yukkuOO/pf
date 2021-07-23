$(function(){

   
    $(".main_slider").slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
        pauseOnFocus:false,
    });

    $(".main_slider figure").eq(1).addClass("on");
    $(".main_slider").on("afterChange",function(e,s,c){
        $(".main_slider figure").eq(c+1).addClass("on").siblings().removeClass("on");
    });



    //토스트메뉴 슬릭//
    $("#content04 .toast_img").slick({
        arrows:false,
        dots:false,
        autoplay:true,
        autoplaySpeed:2000,
        slidesToShow:5,
        aotuoplay:true,
    });
    

    //토스트메뉴 가운데 메뉴 크기 키우기,,//
    $("#content04 figure").eq(7).addClass("on");
    $("#content04 .toast_img").on("afterChange",function(e,s,c){
        $("#content04 figure").eq(c+7).addClass("on").siblings().removeClass("on")
    });

    //토스트메뉴 양사이드 화살표 //
    $("#content04 .arr .xi-angle-left").on("click",function(){
        $("#content04 .toast_img").slick("slickPrev");
    });
    $("#content04 .arr .xi-angle-right").on("click",function(){
        $("#content04 .toast_img").slick("slickNext");
    });


    //커피앤티 슬릭//
    $("#content05 .beverage_img ").slick({
        arrows:false,
        dots:false,
        autoplay:true,
        autoplaySpeed:2000,
        slidesToShow:5,
        aotuoplay:true,
    });

    $("#content05 figure").eq(7).addClass("on");
    $("#content05 .beverage_img").on("afterChange", function(e,s,c){
        $("#content05 figure").eq(c+7).addClass("on").siblings().removeClass("on")
    });


    $("#content05 .arr .xi-angle-left").on("click",function(){
        $("#content05 .beverage_img").slick("slickPrev");
    });

    
    $("#content05 .arr .xi-angle-right").on("click",function(){
        $("#content05 .beverage_img").slick("slickNext");
    });


});

   