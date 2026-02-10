(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('position-fixed bg-dark shadow-sm');
        } else {
            $('.navbar').removeClass('position-fixed bg-dark shadow-sm');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    
})(jQuery);



$(".logo-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,      // Hiding dots makes it look cleaner for partners
    autoplay: true,
    autoplayTimeout: 2000, // Moves every 2 seconds
    smartSpeed: 1000,
    responsive: {
        0: { items: 2 },
        600: { items: 3 },
        1000: { items: 5 } // 5 logos in a row looks very professional
    }
});


// navbar collapse on click (for mobile)
// Navbar auto-close on mobile when clicking a link
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.getElementById('navbarCollapse');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Add click event to all nav links
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function() {
            // Check if navbar is expanded (mobile view)
            if (navbarCollapse.classList.contains('show')) {
                // Close the navbar
                navbarCollapse.classList.remove('show');
                // Update aria-expanded attribute
                navbarToggler.setAttribute('aria-expanded', 'false');
            }
        });
    });
    
    // Also close when clicking outside the navbar on mobile
    document.addEventListener('click', function(event) {
        const isClickInsideNavbar = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);
        const isNavbarExpanded = navbarCollapse.classList.contains('show');
        
        if (!isClickInsideNavbar && isNavbarExpanded && window.innerWidth < 992) {
            navbarCollapse.classList.remove('show');
            navbarToggler.setAttribute('aria-expanded', 'false');
        }
    });
});