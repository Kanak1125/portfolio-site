$(document).ready(function() {
    $('#title').animate({'opacity': '1',
                        },
                         2500)});

// owl carousel script
$(document).ready(function() {
    $(".project_container").owlCarousel({
        margin: 30, // sets the margin of the '.profile' to 20px    
        loop: true,     // loop is activated
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
           0: {
               items: 1,    //only a team-mate is shown on the page
               nav: false
           }, 
           600: {
                items: 2,       //only 2 team-mates are shown
                nav: false
            }, 
            945: {
                items: 3,       
                nav: false
            } 
        }
    })
})

// const projectImage = document.querySelectorAll('.ss');
// // projectImage.forEach(changeImage)

// function changeImage(imgArr) {
//     index = 0;
//     projectImage = imgArr[index];
//     if(index === 0) index++;
    
// }

// const personal_site_img = ['images/personal_site_ss.jpg', 'images/personal_site_ss_dark.jpg'];
// const snake_game = ['images/snake_game_menu_ss.jpg', 'images/snake_game_ss.jpg'];