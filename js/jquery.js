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


});