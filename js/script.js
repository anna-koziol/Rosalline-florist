$(document).ready(function () {
    console.log("Start")   

    $('.products').hover(
        function () {
            $(this).addClass('gray');
            let informations = $(this)[0].children[0];
            $(informations).addClass('scale-block');
        },
        function () {
            $(this).removeClass('gray');
            let informations = $(this)[0].children[0];
            $(informations).removeClass('scale-block');            
        }
    )

    $(window).scroll(function () {
        let cardsTop = $("#cards").offset().top;
        let teamTop = $("#team-images").offset().top;
    
        let cardsBottom = cardsTop + $("#cards").outerHeight();
        let teamBottom = teamTop + $("#team-images").outerHeight();

        let windowTop = $(window).scrollTop();
        let windowBottom = (windowTop + $(window).height());

        console.log(cardsTop, cardsBottom)
        console.log(windowTop, windowBottom)
        
        if ((cardsBottom >= windowTop) && (cardsTop <= windowBottom)) {$("#cards").addClass('append-left');}
        if ((teamBottom >= windowTop) && (teamTop <= windowBottom)) {$("#team-images").addClass('append-right');}
        
    })




})