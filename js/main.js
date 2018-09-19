$(document).ready(function () {

    'use strict';
     //ScrollTop
 $('body').materialScrollTop();

// Nice Scrol
  $("html").niceScroll({ });
    $('.different-products .owl-carousel').owlCarousel({
        rtl:true,
        margin:30,
        stagePadding:30,
        smartSpeed:50,
        // autoplay:true,
        loop:true,
        nav:true,
        navText:["<img src='img/svg/arrow_right.svg'>","<img src='img/svg/arrow_left.svg'>"],
        navClass:['owl-prev','owl-next'],
        responsive:{
            0:{items:1},
            600:{items:3},
            1000:{items:4}
        }
    })
    
        
    $('.owl-carousel').owlCarousel({
//    rtl:true,
    loop:true,
    margin:3,
        autoplay: true,
    nav:true,
        navText:["<img src='img/svg/arrow_right.svg'>","<img src='img/svg/arrow_left.svg'>"],
        navClass:['owl-prev','owl-next'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})
   
});
// Requires jQuery

$(document).on('click','.js-menu_toggle.closed',function(e){
	e.preventDefault(); $('.list_load, .list_item').stop();
	$(this).removeClass('closed').addClass('opened');

	$('.side_menu').css({ 'left':'0px' });

	var count = $('.list_item').length;
	$('.list_load').slideDown( (count*.6)*100 );
	$('.list_item').each(function(i){
		var thisLI = $(this);
		timeOut = 100*i;
		setTimeout(function(){
			thisLI.css({
				'opacity':'1',
				'margin-left':'0'
			});
		},100*i);
	});
});

$(document).on('click','.js-menu_toggle.opened',function(e){
	e.preventDefault(); $('.list_load, .list_item').stop();
	$(this).removeClass('opened').addClass('closed');

	$('.side_menu').css({ 'left':'-250px' });

	var count = $('.list_item').length;
	$('.list_item').css({
		'opacity':'0',
		'margin-left':'-20px'
	});
	$('.list_load').slideUp(300);
});