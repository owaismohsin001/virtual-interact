jQuery.noConflict()(function ($) {
	"use strict";
	$('body').css('min-height', $(window).outerHeight() + 1);
	$('section.not-found').css('min-height', $(window).outerHeight() + 1);
	/*************************************/
	/*MENU*/
	$('.menu-item-has-children > a').click(function (e) {
		$(this).parent().find(' > ul').prepend('<li class="oi_go_back"><span><i class="fa fa-long-arrow-left"> <em>Go Back</em></i>  ' + $(this).html() + '</span></li>')
		$(this).parent().parent().find('> li > a').animate({
			'opacity': 0
		}, 100)
		$(this).parent().find('> ul').css('display', 'block').animate({
			'opacity': 1,
			'margin-left': 0
		}, 400)

		$('.oi_go_back').click(function (e) {
			$(this).parent().animate({
				'opacity': 0
			}, 100).css('display', 'none').css('margin-left', '200px');
			$(this).parent().parent().parent().find('>li > a').animate({
				'opacity': 1
			}, 100)
			$(this).remove();
		});
		e.preventDefault();
	});
	/*END ---- MENU*/
	/*************************************/

	//Ajax Portfolio Shortcode
	if ($('#oi_current_image_shortcode').length) {
		$('#oi_current_image_shortcode').height($(window).outerHeight());
		$('#oi_next_image_shortcode').height($(window).outerHeight());
		$('#oi_c_h').height($(window).outerHeight());
		$('#oi_current_image_shortcode').parents('.vc_column-inner').css('padding', 0);
	}
	
	$(window).load(function () {
		$('.preload').addClass('page_loaded');
		setTimeout(function(){
		  $('.preload').css('display','none');
		}, 300);
	});
	if (($(window).width() > 1200) && (oi_theme.raw_scroll == '1') && ($(window).height() > 800)) {
		$("#pagepiling > .vc_row").each(function (index) {
				$(this).wrap(function () {
					return "<div class='section' data-id=" + (index + 1) + "></div>";
				});
			});
		$(window).load(function () {
			
			$('#pagepiling').pagepiling({
				verticalCentered: true,
				css3: false,
				scrollingSpeed: 700,
				onLeave: function (index, nextIndex, direction) {
					$('.hamburger_holder span').toggleClass('moving');
					var new_title = $('.section[data-id="' + nextIndex + '"]').find('.vc_row').attr('id').replace('_', ' ').replace('_', ' ');
					$('body').attr('data-derection', direction);
					if ($('.section[data-id="' + nextIndex + '"]').find('.vc_row').hasClass('light_bg')) {
						$('body').removeClass('dark_bg').addClass('light_bg');
					} else {
						$('body').removeClass('light_bg').addClass('dark_bg');
					}
					setTimeout(function () {
						$('.section_number').html('0' + nextIndex);
						$('.page_title p').html(new_title);
					}, 650);

					if (!$('.section[data-id="' + nextIndex + '"]').find('.oi_ajax_port_holder').length && !$('.section[data-id="' + nextIndex + '"]').find('.wpb_revslider_element').length && !$('.section[data-id="' + nextIndex + '"]').find('.no_animation').length) {
						if (direction === 'up') {
							if (!$('.section[data-id="' + index + '"]').find('.oi_ajax_port_holder').length && !$('.section[data-id="' + index + '"]').find('.wpb_revslider_element').length && !$('.section[data-id="' + index + '"]').find('.no_animation').length) {
								$('.section[data-id="' + index + '"] >div >div >div >div').animate({
									opacity: 0,
									'padding-top': '200px'
								}, 700);
							}
							$('.section[data-id="' + nextIndex + '"] >div >div >div >div').css({
								'opacity': 0,
								'padding-bottom': '0px',
								'padding-top': '200px'
							});
						} else {
							$('.section[data-id="' + nextIndex + '"] >div >div >div >div').css({
								'opacity': 0,
								'padding-top': '0px',
								'padding-bottom': '200px'
							});
							if (!$('.section[data-id="' + index + '"]').find('.oi_ajax_port_holder').length && !$('.section[data-id="' + index + '"]').find('.wpb_revslider_element').length && !$('.section[data-id="' + index + '"]').find('.no_animation').length) {
								$('.section[data-id="' + index + '"] >div >div >div >div').animate({
									opacity: 0,
									'padding-bottom': '200px'
								}, 700);
							}
						}
						$('.section[data-id="' + nextIndex + '"] >div >div >div >div').animate({
							opacity: 1,
							'padding-top': '0px',
							'padding-bottom': '0px'
						}, 1600);
					}
				},
				afterLoad: function () {
					$('.hamburger_holder span').toggleClass('moving');
				},

				afterRender: function () {
					if ($('.active').find('.vc_row').hasClass('light_bg')) {
						$('body').addClass('light_bg');
					} else {
						$('body').addClass('dark_bg');
					}
				}

			});
			$("#pagepiling > .vc_row-full-width").remove();
		});
	}
	$('.hamburger_holder span').each(function () {
		$(this).on("click", function () {
			$('body').toggleClass('go_overlay');
			if ($('body').hasClass('active_extra')) {
				$('body').removeClass('active_extra');
			}
			setTimeout(function () {
				$('body').toggleClass('active_menu');
				$('.hamburger_holder span').toggleClass('icon_menu icon_close');
				$('.hamburger_holder span').delay(300).animate({
					opacity: 1
				}, 150);
			}, 150);
			$('.hamburger_holder span').animate({
				opacity: 0
			}, 150);
		});
	});

	$('.call_extra').each(function () {
		$(this).on("click", function () {
			$('body').toggleClass('active_extra');
		});
	});


	$('.overlay').each(function () {
		$(this).on("click", function () {
			$('body').toggleClass('go_overlay');
			if ($('body').hasClass('active_extra')) {
				$('body').removeClass('active_extra');
			}
			setTimeout(function () {
				$('body').toggleClass('active_menu');
				$('.hamburger_holder span').toggleClass('icon_menu icon_close');
				$('.hamburger_holder span').delay(300).animate({
					opacity: 1
				}, 150);
			}, 150);
			$('.hamburger_holder span').animate({
				opacity: 0
			}, 150);
		});
	});



	$('.oi_crea_a').click(function (e) {
		var first = $('.oi_creative_p_content').attr('data-first');
		var last = $('.oi_creative_p_content').attr('data-last');
		var tags = $('.oi_creative_p_content').attr('data-tags');
		if ($('#oi_current_image_shortcode').length) {
			var img = $('#oi_current_image_shortcode').css('background-image');
			img = img.replace('url("', '"').replace(')', '');
		} else {
			var img = $('#oi_current_image').attr('style');
		}
		var id = $(this).attr('data-id');

		$('.oi_creative_p_content').animate({
			'opacity': 0
		}, 300);

		$.get(
			oi_theme.ajax_url, {
				'action': 'gravity_ajax_request_c',
				'id': id.toString(),
				'first': first.toString(),
				'last': last.toString(),
				'tags': tags
			},
			function (result, status) {
				$(result.new_posts).imagesLoaded(function () {
					$('#oi_current_image_shortcode').css('background-image', 'url(' + img + ')');
					$('#oi_next_image_shortcode').css('background-image', 'url("' + result.new_posts.url + '")');

					$('.oi_prev_c_p').attr('data-id', result.new_posts.prev);
					$('.oi_next_c_p').attr('data-id', result.new_posts.next);
					$('.oi_c_title a').html(result.new_posts.title);
					$('.oi_c_cats').html(result.new_posts.cat);
					$('.oi_c_title a').attr('href', result.new_posts.details);
					$('.oi_c_title a').attr('data-id', result.new_posts.cur);
					$('.oi_c_details').attr('data-id', result.new_posts.cur);
					$('#oi_next_image_shortcode').animate({
						'opacity': 1
					}, 600);
					setTimeout(function () {
						$('#oi_current_image_shortcode').css('background-image', 'url("' + result.new_posts.url + '")')
					}, 560);
					setTimeout(function () {
						$('#oi_next_image_shortcode').animate({
							'opacity': 0
						}, 100)
					}, 800);
					setTimeout(function () {
						$('.oi_creative_p_content').animate({
							'opacity': 1
						}, 400)
					}, 860);


				});
			},
			"json"
		);
		e.preventDefault();
	});


	$('a[data-rel^=lightcase]').lightcase();
	lightcase.resize();
if((oi_theme.raw_scroll == '1') && ($(window).width() > 900)){
	var win = 0;
	var winh = 0;
	$(window).load(function () {
		win = $(window).width();
		winh = $(window).height();
	});
	$(window).bind('resize', function (e) {
		if (window.RT) clearTimeout(window.RT);
		window.RT = setTimeout(function () {

			if ((Math.abs(win - $(window).width()) > 40) || (Math.abs(win - $(window).height()) > 40) ) {
				$('body').css('opacity', 0)
				this.location.reload(false);
			}

		}, 100);
	});
}
function initparticles() {
bubbles();
}


function bubbles() {
   $.each($(".bubbles"), function(){
      var bubblecount = ($(this).width()/30);
      for(var i = 0; i <= bubblecount; i++) {
         var size = ($.rnd(30,60)/10);
         $(this).append('<span class="particle" style="top:' + $.rnd(10,90) + '%; left:' + $.rnd(0,95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,30)*0.1) + 's;"></span>');
      }
   });
}


jQuery.rnd = function(m,n) {
      m = parseInt(m);
      n = parseInt(n);
      return Math.floor( Math.random() * (n - m + 1) ) + m;
};

initparticles();
	
});
