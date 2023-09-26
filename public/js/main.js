;(function () {
	
	'use strict';



	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Main Menu Superfish
	var mainMenu = function() {

		$('#fh5co-primary-menu').superfish({
			delay: 0,
			animation: {
				opacity: 'show'
			},
			speed: 'fast',
			cssArrows: true,
			disableHI: true
		});

	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};


	// Offcanvas and cloning of the main menu
	var offcanvas = function() {

		var $clone = $('#fh5co-menu-wrap').clone();
		$clone.attr({
			'id' : 'offcanvas-menu'
		});
		$clone.find('> ul').attr({
			'class' : '',
			'id' : ''
		});

		$('#fh5co-page').prepend($clone);

		// click the burger
		$('.js-fh5co-nav-toggle').on('click', function(){

			if ( $('body').hasClass('fh5co-offcanvas') ) {
				$('body').removeClass('fh5co-offcanvas');
			} else {
				$('body').addClass('fh5co-offcanvas');
			}
			

		});

		$('#offcanvas-menu').css('height', $(window).height());

		$(window).resize(function(){
			var w = $(window);


			$('#offcanvas-menu').css('height', w.height());

			if ( w.width() > 769 ) {
				if ( $('body').hasClass('fh5co-offcanvas') ) {
					$('body').removeClass('fh5co-offcanvas');
				}
			}

		});	

	}

	

	// Click outside of the Mobile Menu
	var mobileMenuOutsideClick = function() {
		$(document).click(function (e) {
	    var container = $("#offcanvas-menu, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('fh5co-offcanvas') ) {
				$('body').removeClass('fh5co-offcanvas');
			}
	    }
		});
	};


	// Animations

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};
	
	var stickyBanner = function() {
		var $stickyElement = $('.sticky-banner');
		var sticky;
		if ($stickyElement.length) {
		  sticky = new Waypoint.Sticky({
		      element: $stickyElement[0],
		      offset: 0
		  })
		}
	}; 

	// Document on load.
	$(function(){
		mainMenu();
		parallax();
		offcanvas();
		mobileMenuOutsideClick();
		contentWayPoint();
		stickyBanner();
	});


}());

			// Smooth Scrolling and Button Navigation \\

document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.getElementById("contactUsButton");
    const sectionToScroll = document.getElementById("fh5co-contact");

    scrollButton.addEventListener("click", function() {
        const targetPosition = sectionToScroll.offsetTop - 75;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Function to handle smooth scrolling
    function smoothScrollToTarget() {
        const hash = window.location.hash;
        if (hash == "#fh5co-contact") {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                const targetPosition = targetElement.offsetTop - 75;
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        }
    }

    // Scroll to the target section when the page loads or when hash changes
    window.addEventListener("load", smoothScrollToTarget);
    window.addEventListener("hashchange", smoothScrollToTarget);
});

// Handle Contact - US form submission

$(
	function(){
	const GoogleAppScriptURL = "https://script.google.com/a/gmail.com/macros/s/AKfycbxIAGt2Goy3HNF8dZODcLfPfPNYlFspju93CIOZgk_RQ24pqZwz_WjyeQ8InmbVev2ZaQ/exec";
	const form  = document.forms["contact-us-form"];
	const message = document.getElementById("contact-form-submit-btn")

	form.addEventListener('submit',e =>{
		e.preventDefault()
 
		alert('Thank you for your message, our deligent team will get righ to it!');
		fetch(GoogleAppScriptURL, {method:"POST", body: new FormData(form)})
		.then(Response => {
			console.log(Response)
			message.innerHTML = "Submitted"
			setTimeout(function(){
				message.innerHTML = "Submit Another"
			},500)
		})

	})

}

) 

