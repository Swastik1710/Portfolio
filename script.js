$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $(window).scroll(function(){
        var windowTop = $(window).scrollTop(),
        documentHeight = $(document).height(),
        windowHeight = $(window).height();
        var scroll = (windowTop / (documentHeight - windowHeight))*100;
        $('.scroll').css("width", (scroll + '%'));
      });

    $('.icons1 li').click(function () {
        $(this).toggleClass("shadow-2").siblings();
        $(this).toggleClass("fill-color").siblings();
        $(this).toggleClass("fill-back").siblings();
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        // $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        // $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        // $('.navbar .scroll').toggle();
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Sophomore", "Frontend Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Sophomore", "Frontend Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $(function() {
        var svg1 = $('.abt svg');
        var svg2 = $('.edu svg');
        var svg3 = $('.skl svg');
        var heightThreshold1 = $(".about").offset().top;
        var heightThreshold2 = $(".education").offset().top;
        var heightThreshold3 = $(".skills").offset().top;
        heightThreshold1-=400;
        heightThreshold2-=400;
        heightThreshold3-=400;
        var heightThreshold_end1  = $(".about").offset().top + $(".about").height()  ;
        var heightThreshold_end2  = $(".education").offset().top + $(".education").height()  ;
        var heightThreshold_end3  = $(".skills").offset().top + $(".skills").height()  ;
        // heightThreshold_end1+=300;
        $(window).scroll(function() {
            // console.log(heightThreshold1);
            // console.log(heightThreshold_end1);
            var scroll = $(window).scrollTop();
            if (scroll >= heightThreshold1 && scroll <=  heightThreshold_end1 ) {
                svg1.addClass('animated');
            } else {
                svg1.removeClass('animated');
            }
            if (scroll >= heightThreshold2 && scroll <=  heightThreshold_end2 ) {
                svg2.addClass('animated');
            } else {
                svg2.removeClass('animated');
            }
            if (scroll >= heightThreshold3 && scroll <=  heightThreshold_end3 ) {
                svg3.addClass('animated');
            } else {
                svg3.removeClass('animated');
            }
          });
        })
        

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: false,
        touchDrag: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    // form reset after submission
    window.onbeforeunload = () => {
        for (const form of document.getElementsByTagName('form')) {
            form.reset();
        }
    }
});

