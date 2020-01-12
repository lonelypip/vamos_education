"use strict";
jQuery(document).ready(function ($) {

	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});
	/*---------------------------------------------*
	 * Mobile menu
	 ---------------------------------------------*/
	$('.navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: (target.offset().top - 40)
				}, 1000);
				if ($('.navbar-toggle').css('display') != 'none') {
					$(this).parents('.container').find(".navbar-toggle").trigger("click");
				}
				return false;
			}
		}
	});


	/*---------------------------------------------*
	 * STICKY scroll
	 ---------------------------------------------*/

	$.localScroll();

	/*---------------------------------------------*
	 * WOW
	 ---------------------------------------------*/

	var wow = new WOW({
		mobile: false // trigger animations on mobile devices (default is true)
	});
	wow.init();



	/* ---------------------------------------------------------------------
	 Carousel
	 ---------------------------------------------------------------------= */

	$('.main_home_slider').owlCarousel({
		responsiveClass: true,
		autoplay: false,
		items: 1,
		loop: true,
		dots: true,
		nav: false,
		navText: [
			"<i class='lnr lnr-chevron-left'></i>",
			"<i class='lnr lnr-chevron-right'></i>"
		],
		autoplayHoverPause: true

	});

	$('.single_features_slide').owlCarousel({
		responsiveClass: true,
		autoplay: false,
		items: 1,
		loop: true,
		dots: true,
		nav: false,
		navText: [
			"<i class='lnr lnr-chevron-left'></i>",
			"<i class='lnr lnr-chevron-right'></i>"
		],
		autoplayHoverPause: true

	});
	$('.main_teastimonial_slider').owlCarousel({
		responsiveClass: true,
		autoplay: false,
		items: 1,
		loop: true,
		dots: true,
		nav: false,
		navText: [
			"<i class='lnr lnr-chevron-left'></i>",
			"<i class='lnr lnr-chevron-right'></i>"
		],
		autoplayHoverPause: true

	});

	//fancybox
	$(".youtube-media").on("click", function (e) {
		var jWindow = $(window).width();
		if (jWindow <= 410) {
			return;
		}
		$.fancybox({
			href: this.href,
			padding: 4,
			type: "iframe",
			'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
		});
		return false;
	});


	// magnificPopup

	$('.portfolio-img').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		},
	});

	//mytabs

	$('#myTabs a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})

	//skillbar section

	var skillBarTopPos = jQuery('.skillbar').position().top;
	jQuery(document).scroll(function () {
		var scrolled_val = $(document).scrollTop().valueOf();
		if (scrolled_val > skillBarTopPos - 250)
			startAnimation();
	});

	function startAnimation() {
		jQuery('.skillbar').each(function () {
			jQuery(this).find('.skillbar-bar').animate({
				width: jQuery(this).attr('data-percent')
			}, 6000);
		});
	};


	//---------------------------------------------
	// Counter 
	//---------------------------------------------

	$('.statistic-counter').counterUp({
		delay: 10,
		time: 2000
	});

	// main-menu-scroll

	jQuery(window).scroll(function () {
		var top = jQuery(document).scrollTop();
		var height = 300;
		//alert(batas);

		if (top > height) {
			jQuery('.navbar-fixed-top').addClass('menu-scroll');
		} else {
			jQuery('.navbar-fixed-top').removeClass('menu-scroll');
		}
	});

	// scroll Up

	$(window).scroll(function () {
		if ($(this).scrollTop() > 600) {
			$('.scrollup').fadeIn('slow');
		} else {
			$('.scrollup').fadeOut('slow');
		}
	});

	$('.scrollup').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
		return false;
	});

	//    $('#menu').slicknav();
	jQuery('#portfoliowork').mixItUp({
		selectors: {
			target: '.tile',
			filter: '.filter',
			sort: '.sort-btn'
		},
		animation: {
			animateResizeContainer: false,
			effects: 'fade scale'
		}

	});


	//    $('#mixcontent').mixItUp({
	//        animation: {
	//            animateResizeContainer: false,
	//            effects: 'fade rotateX(-45deg) translateY(-10%)'
	//        }
	//    });

	//    $('.dropdown-menu').click(function (e) {
	//        e.stopPropagation();
	//    });

	//    $('.grid').masonry({
	//// options
	//        itemSelector: '.grid-item',
	//    });
	//    


	$('.dropdown-menu').click(function (e) {
		e.stopPropagation();
	});

	//End

});



// $(document).on("scroll", function () {
//     if ($(document).scrollTop() > 120) {
//         $("nav").addClass("small");
//     } else {
//         $("nav").removeClass("small");
//     }
// });




// function myFunction() {
//     var x = document.getElementById("formid");
//     var name = x.elements[0].value
//     var surname = x.elements[1].value
//     var email = x.elements[2].value
//     var message = x.elements[3].value
//     console.log(name,surname,email,message)
// }

const URL = 'https://api.telegram.org/bot1063170033:AAFUyG_hJ-bvUeu0mM89jQDJ-DCY5BP1lI4/sendMessage'

const form = document.getElementById("formid");
const imputnumberfield = document.getElementById("number_field")

const matchNumber = event => {
	const reg = /\D*/g;

	if (event.target.value.search(reg) !== -1) {
		event.target.value = event.target.value.replace(reg, '');
	}
};

function sendMessage(event, form) {
	event.preventDefault();

	const formData = new FormData(form);
	const formDataObj = {};

	formData.forEach((item, i) => formDataObj[i] = item);

	const kek = '<pre><strong>Заявление</strong>\nИмя: ' + formDataObj.name + '\n' + 'Фамилия: ' + formDataObj.surname + '\n' + 'Email: ' + formDataObj.email + '\n' + 'Phone: ' + formDataObj.phone + '\n' + 'Comment: ' + formDataObj.message + '</pre>'

	const data = {
		chat_id: 146168463,
		parse_mode: 'HTML',
		text: kek,
	}

	const config = {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json'
		},
	}

	if ((formDataObj.name && formDataObj.surname && formDataObj.email + formDataObj.phone && formDataObj.message).length !== 0) {
		fetch(URL, config)
			.then(res => console.log(res))
			.catch(err => console.log(err))
	} else {
		console.log('Заполните все поля!')
	}
}

form.addEventListener('submit', event => sendMessage(event, form));
imputnumberfield.addEventListener('input', matchNumber);