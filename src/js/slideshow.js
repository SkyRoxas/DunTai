import 'bxslider';

$(function() {
    $('.bxslider').bxSlider({
        mode: 'horizontal',
        captions: true,
        adaptiveHeight: true,
        pager: false,
        speed: 5000,
    });
    $(window).resize(() => {
        $('.bxslider').bxSlider('reloadSlider');
    });
});

// export default test();