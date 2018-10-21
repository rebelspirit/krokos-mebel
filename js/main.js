document.addEventListener('DOMContentLoaded', function() {
	//Dropdown Menu
    var elems = document.querySelectorAll('.dropdown-trigger');
    var coverTrigger = false;
    var instances = M.Dropdown.init(elems, coverTrigger);

    //Tooltip button
    var tooltipBtn = document.querySelectorAll('.tooltipped');
    var instancesBtn = M.Tooltip.init(tooltipBtn);

    //sidebar Menu
    var sidebar = document.querySelectorAll('.sidenav');
    var instancesSidebar = M.Sidenav.init(sidebar);

    //Parallax
    var parallax = document.querySelectorAll('.parallax');
    var instancesParallax = M.Parallax.init(parallax);

    //Modal Tigger (callback)

    var callback = document.querySelectorAll('.modal');
    var instancesCallback = M.Modal.init(callback, {
        preventScrolling: false
    });

    var callback = document.querySelectorAll('.modal-scroll');
    var instancesCallback = M.Modal.init(callback, {
        preventScrolling: false
    });

    //Carousel Slider
    // var carousel = document.querySelectorAll('.carousel');
    // var instancesCarousel = M.Carousel.init(carousel, {
    //     fullWidth: true,
    //     indicators: true,
    // });
    //MaterialBox
    var materialbox = document.querySelectorAll('.materialboxed');
    var instancesMaterialbox = M.Materialbox.init(materialbox);
  });
 