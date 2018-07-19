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
})