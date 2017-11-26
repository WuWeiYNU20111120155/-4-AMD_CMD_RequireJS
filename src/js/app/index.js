define(['jquery', 'com/gotop', 'com/expose','com/waterfall','com/carousel'], function($, GoTop, Expose,WaterFallLayout,Carousel) {
    new GoTop();

    new Expose($('#home'), function($node) {
        $('#header .nav-bar li').eq(0).addClass('nav-bar-active').siblings().removeClass('nav-bar-active')
    })
    new Expose($('#service'), function($node) {
        $('#header .nav-bar li').eq(1).addClass('nav-bar-active').siblings().removeClass('nav-bar-active')
          console.log('service')
    })
    new Expose($('#memory'), function($node) {
        $('#header .nav-bar li').eq(2).addClass('nav-bar-active').siblings().removeClass('nav-bar-active')
        console.log('memory')
    })
    new Expose($('#about'), function($node) {
        $('#header .nav-bar li').eq(3).addClass('nav-bar-active').siblings().removeClass('nav-bar-active')
    })
    new Expose($('#team'), function($node) {
        $('#header .nav-bar li').eq(4).addClass('nav-bar-active').siblings().removeClass('nav-bar-active')
    })
    new Expose($('#contact'), function($node) {
        $('#header .nav-bar li').eq(5).addClass('nav-bar-active').siblings().removeClass('nav-bar-active')
    })
    new WaterFallLayout();
    Carousel.init($('.lunbo'))

});