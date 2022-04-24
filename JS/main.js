//Animataion
AOS.init();

$(document).ready(function () {


    $('.head-btn').click(function () {
        $('.side-menu').addClass("offcanvas-menu");
        $('.head-btn').addClass("show");
    })
    $('.close-btn').click(function () {
        $('.head-btn').removeClass("show");
        $('.side-menu').removeClass("offcanvas-menu");
    })
    $('.head').click(function () {
        $('.head-btn').removeClass("show");
        $('.side-menu').removeClass("offcanvas-menu");
    })

    $('.social-trg').click(function () {
        $('.social-grp').toggle(500);
    })

    function checkwidth() {
        var windowSize = $(window).width();
        if (windowSize >= 992) {
            $('.side-menu').removeClass("offcanvas-menu");
        }
    }
    checkwidth();
    $(window).resize(checkwidth);


    // scroll-up button show/hide script + header fixed
    $(window).scroll(function () {
        if (this.scrollY > 150) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
        if (this.scrollY > 50) {
            $('.social').addClass("show");
        } else {
            $('.social').removeClass("show");
        }
        if (this.scrollY > 0) {
            $('.header1').addClass("fixed");
            // $('.header1').addClass("fixed");

        } else {
            $('.header1').removeClass("fixed");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });


    //typing Js
    var typed = new Typed(".typing1", {
        strings: ["Doctor", "Engineer", "Scientist", "Processor "],
        typeSpeed: 60,
        backSpeed: 50,
        loop: true
    });

    var image = document.getElementsByClassName('thumbnail');
    new simpleParallax(image, {
        orientation: 'right'
    });


    var swiper = new Swiper(".mySwiper", {
        speed: 1000,
        parallax: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 1700,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

})