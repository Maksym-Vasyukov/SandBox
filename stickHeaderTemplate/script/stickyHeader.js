$(window).scroll(function(){
    var pixs = $(document).scrollTop()
    pixs = pixs / 3;
    $(".header-banner").css({"-webkit-filter": "grayscale("+pixs+"%)","filter": "grayscale("+pixs+"%)" })

    if ($(window).scrollTop() >= 300) {
       $('nav').addClass('fixed-header');
    }
    else {
       $('nav').removeClass('fixed-header');
    }
});

/* scrollTop() >= 240
   Should be equal the the height of the header
 */
