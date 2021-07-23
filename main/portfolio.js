 $(function(){
/////////////////////////////////////////////////////////////////////////


    /* -------------풀페이지만들기------------- 
     잘만든 사이트 모음 사이트:DBCUT-들어가서 한 번 보기 (https://www.dbcut.com/bbs/index.php)*/
    $("#main").fullpage({
        anchors:['xm01','xm02','xm03','xm04','xm05'],
        afterLoad: function(origin,destination, direction){
            $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
            $("nav li").eq(destination.index).addClass("on").siblings().removeClass("on");
            if(destination.index===4) {
                $("footer").css({color:"#fff"})
            }else {
                $("footer").removeAttr("style")
            }
        },



    });



$("#mopen").on("click",function(){
    $(this).toggleClass("on");
   $("#cover_nav").toggleClass("on");
});

$(".pf01 .xi-pause").on("click", function(){
    $(".pf01 video").trigger("pause");
});

$(".pf01 .xi-play").on("click", function(){
    $(".pf01 video").trigger("play");
});


$("#cover_nav .link a").on("click",function(){
    $("#cover_nav").removeClass("on");
    $("#mopen").removeClass("on");
});



$(".pf02 .xi-pause").on("click", function(){
    $(".pf02 video").trigger("pause");
});

$(".pf02 .xi-play").on("click", function(){
    $(".pf02 video").trigger("play");
});


// 슬라이더 만들기 // 

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

$(".pf03 .arr .xi-angle-left").on("click",function(){
    $(".artworkli").slick("slickPrev");
});
$(".pf03 .arr .xi-angle-right").on("click",function(){
    $(".artworkli").slick("slickNext");
});












////////////////////////////////////////////////////////////////////////
 });