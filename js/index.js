$(document).ready(function () {

    setTimeout(() => {
        $('.r1-1').addClass('animate__slideOutDown')
    }, 1500);
    setTimeout(() => {
        $('.r1-1').removeClass('animate__slideOutDown')
        $('.r1-1').addClass('animate__slideInUp')
    }, 8000);
    setInterval(() => {
        setTimeout(() => {
            $('.r1-1').addClass('animate__slideOutDown')
        }, 1500);
        setTimeout(() => {
            $('.r1-1').removeClass('animate__slideOutDown')
            $('.r1-1').addClass('animate__slideInUp')
        }, 8000);
    }, 8500);


    setTimeout(() => {
        $('.r2-1').addClass('animate__slideOutDown')
    }, 1700);
    setTimeout(() => {
        $('.r2-1').removeClass('animate__slideOutDown')
        $('.r2-1').addClass('animate__slideInUp')
    }, 8200);
    setInterval(() => {
        setTimeout(() => {
            $('.r2-1').addClass('animate__slideOutDown')
        }, 1700);
        setTimeout(() => {
            $('.r2-1').removeClass('animate__slideOutDown')
            $('.r2-1').addClass('animate__slideInUp')
        }, 8200);
    }, 8500);


    setTimeout(() => {
        $('.r1-2').removeClass('hide')
        $('.r1-2').addClass('animate__slideInUp')
    }, 2000);
    setTimeout(() => {
        $('.r1-2').removeClass('animate__slideInUp')
        $('.r1-2').addClass('animate__slideOutDown')
    }, 4500);
    setInterval(() => {
        setTimeout(() => {
            $('.r1-2').removeClass('animate__slideOutDown')
            $('.r1-2').addClass('animate__slideInUp')
        }, 2000);
        setTimeout(() => {
            $('.r1-2').removeClass('animate__slideInUp')
            $('.r1-2').addClass('animate__slideOutDown')
        }, 4500);
    }, 8500);


    setTimeout(() => {
        $('.r2-2').removeClass('hide')
        $('.r2-2').addClass('animate__slideInUp')
    }, 2200);
    setTimeout(() => {
        $('.r2-2').removeClass('animate__slideInUp')
        $('.r2-2').addClass('animate__slideOutDown')
    }, 4700);
    setInterval(() => {
        setTimeout(() => {
            $('.r2-2').removeClass('animate__slideOutDown')
            $('.r2-2').addClass('animate__slideInUp')
        }, 2200);
        setTimeout(() => {
            $('.r2-2').removeClass('animate__slideInUp')
            $('.r2-2').addClass('animate__slideOutDown')
        }, 4700);
    }, 8500);


    setTimeout(() => {
        $('.r1-3').removeClass('hide')
        $('.r1-3').addClass('animate__slideInUp')
    }, 5000);
    setTimeout(() => {
        $('.r1-3').removeClass('animate__slideInUp')
        $('.r1-3').addClass('animate__slideOutDown')
    }, 7500);
    setInterval(() => {
        setTimeout(() => {
            $('.r1-3').removeClass('animate__slideOutDown')
            $('.r1-3').addClass('animate__slideInUp')
        }, 5000);
        setTimeout(() => {
            $('.r1-3').removeClass('animate__slideInUp')
            $('.r1-3').addClass('animate__slideOutDown')
        }, 7500);
    }, 8500);


    setTimeout(() => {
        $('.r2-3').removeClass('hide')
        $('.r2-3').addClass('animate__slideInUp')
    }, 5200);
    setTimeout(() => {
        $('.r2-3').removeClass('animate__slideInUp')
        $('.r2-3').addClass('animate__slideOutDown')
    }, 7700);
    setInterval(() => {
        setTimeout(() => {
            $('.r2-3').removeClass('animate__slideOutDown')
            $('.r2-3').addClass('animate__slideInUp')
        }, 5200);
        setTimeout(() => {
            $('.r2-3').removeClass('animate__slideInUp')
            $('.r2-3').addClass('animate__slideOutDown')
        }, 7700);
    }, 8500);


    var fadeinR = {
        origin: 'right',
        distance: '40px',
        duration: 800,
        // interval: 400,
        // reset: true,
    };
    
    var fadeinL = {
        origin: 'left',
        distance: '40px',
        duration: 800,
    };

    ScrollReveal().reveal('.fade-in-R', fadeinR);
    ScrollReveal().reveal('.fade-in-L', fadeinL);

    // $(".circle").hover(function(){
    //     $(this).children(".text").toggleClass("hide");
    //     $(this).children(".text-name").toggleClass("hide");
    // })

    $(".top-circle").hover(function(){
        $(this).siblings(".circle").children(".text").toggleClass("hide");
        $(this).siblings(".circle").children(".text-name").toggleClass("hide");
        $(this).siblings(".circle").toggleClass("circle-hover");
      });

});