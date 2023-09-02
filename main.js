$ (function() {

    
    $(".salon-photo").slick({
        autoplay: true,
        centerMode: true,
        centerPadding: '20%',
    });

    $(".toggle-btn").on("click",function(){
        ($("header").toggleClass("open"));
    });
    
    $(".header-nav2 a").on("click",function(){
        $("header").toggleClass("open");
    });
    

});
