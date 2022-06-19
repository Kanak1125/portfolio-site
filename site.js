$(document).ready(function() {
    $('#title').animate({'opacity': '1',
                        },
                         2500)});

let offset_value = 100;

$(document).ready(function() {
    $(window).scroll(function () { 
        scrollFunction();
    });
})

function scrollFunction() {
    console.log(opacity)
    if(window.pageYOffset > offset_value) {
        $('.scroll_up').fadeIn(3000);
        $('.scroll_up').css({'display': 'block'});
    }
    else $('.scroll_up').fadeOut();
}

// owl carousel script
$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        margin: 30,     // sets the margin of the '.project' to 30px    
        loop: true,     // loop is activated
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
           0: {
               items: 1,    //only a project is shown on the page
               nav: false
           }, 
           600: {
                items: 2,       //only 2 projects are shown
                nav: false
            }, 
            945: {
                items: 3,       
                nav: false
            } 
        }
    })
})