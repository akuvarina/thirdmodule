$(document).ready(function () {
    $("a[rel='m_PageScroll2id']").mPageScroll2id({
        scrollSpeed: 800,
    });
    $('.slider-container').slick({
        infinite: true,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 3000
    });
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

});