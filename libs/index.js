$('.menu-btn').on('click',function(e) {
    e.preventDefault();
    $('.menu').toggleClass('menu-btn_active');
    $('.menu-nav-link').toggleClass('menu-nav-link_active');
});