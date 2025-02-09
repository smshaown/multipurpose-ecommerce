$(document).ready(function () {
    'use strict';
    /* Js Index
    -----------------------------------
    1. Preloader
    2. News Flash
    3. Filter Offcanvas
    4. Sticky Header
    5. Offcanvas Mobile Menu
    6. Hero Slider
    7. Category Slide
    8. New Arrival Slide
    9. New Arrival Two Slide
    10. Advertisement Slide
    11. Top Selling Product Slide
    12. Trending Product Slide
    13. Best Week Product Slide
    14. Top Rated Product Slide
    15. Single Product Image
    16. Single Product Color
    17. Quantity
    18. Related Product Slide
    19. Recently View Product Slide
    20. Price Range
    21. Shop Select
    22. Language Select
    23. Counter Number
    24. My Popup
    */
   /*
    ==========================================
        1. Preloader
    ==========================================
    */
	$('body').prepend('<div class="pre-loader"><div class="loader-item"></div></div>');

	setTimeout(function(){
		$( '.page-transition' ).removeClass( 'pre-loader-active' );
	}, 10);
	setTimeout(function(){
		$('.pre-loader').addClass('pre-loader-inactive');
	}, 300);
	setTimeout(function(){
		$( '.pre-loader' ).detach();
	}, 1000);
   /*
    ==========================================
        2. News Flash
    ==========================================
    */
    var newsFlash = new Swiper(".news-flash-active", {
        loop:true,
        autoplay: true,
        direction: "vertical",
        slidesPerView: 1,
        pagination: false,
    });
    /*
    ==========================================
        3. Filter Offcanvas
    ==========================================
    */
    // Filter Offcanvas Open
	$(".filter-offcanvas-open").on("click", function () {
		$(".filter-offcanvas").addClass("filter-open");
		$(".filter-offcanvas-overlay").addClass("filter-overlay-open");
	});
	
    // Filter Offcanvas Close
	$(".filter-offcanvas-close").on("click", function () {
		$(".filter-offcanvas").removeClass("filter-open");
		$(".filter-offcanvas-overlay").removeClass("filter-overlay-open");
	});
	
	// Filter Offcanvas Overlay
	$(".filter-offcanvas-overlay").on("click", function () {
		$(".filter-offcanvas").removeClass("filter-open");
		$(".filter-offcanvas-overlay").removeClass("filter-overlay-open");
	});
    /*
    ==========================================
        4. Sticky Header 
    ==========================================
    */
	if ($('.sticky-header')) {
		var sticky = new Waypoint.Sticky({
			element: $('.sticky-header')[0],
			stuckClass: 'fixed',
			offset: -200,
		});
	}
    /*
    ==========================================
        5. Offcanvas Mobile Menu
    ==========================================
    */
    $('.arrow-icon').on('click', function (e) {
        var $parent = $(this).closest('li'),
        $targetUl = $parent.find('ul').eq(0);
        if ( !$parent.hasClass('menu-open') ) {
            $targetUl.slideDown(function () {
                $parent.addClass('menu-open');
            });
        } else {
            $targetUl.slideUp(function () {
                $parent.removeClass('menu-open');
            });
        }
    });
    /*
    ==========================================
        6. Hero Slider
    ==========================================
    */
    var heroSlider = new Swiper(".hero-slider-active", {
        loop:true,
        pagination: false,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".hero-slider-next-icon",
            prevEl: ".hero-slider-prev-icon",
        },
    });
    /*
    ==========================================
        7. Category Slide
    ==========================================
    */
    var categorySlide = new Swiper(".category-active", {
        pagination: false,
        loop:true,
        spaceBetween: 16,
        breakpoints: {
            300: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 6,
            },
            1400: {
                slidesPerView: 7,
            },
            1500: {
                slidesPerView: 8,
            },
            1700: {
                slidesPerView: 9,
            },
            1800: {
                slidesPerView: 10,
            },
        },
        navigation: {
            nextEl: ".category-next-icon",
            prevEl: ".category-prev-icon",
        },
    });
    /*
    ==========================================
        8. New Arrival Slide
    ==========================================
    */
    var newArrival = new Swiper(".new-arrival-active", {
        pagination: false,
        loop:true,
        spaceBetween: 16,
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 4,
            },
        },
        navigation: {
            nextEl: ".new-arrival-next-icon",
            prevEl: ".new-arrival-prev-icon",
        },
    });
    /*
    ==========================================
        9. New Arrival Two Slide
    ==========================================
    */
    var newArrivalTwo = new Swiper(".new-arrival-two-active", {
        pagination: false,
        loop:true,
        spaceBetween: 16,
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1600: {
                slidesPerView: 5,
            },
            1400: {
                slidesPerView: 4,
            },
        },
        navigation: {
            nextEl: ".new-arrival-two-next-icon",
            prevEl: ".new-arrival-two-prev-icon",
        },
    });
    /*
    ==========================================
        10. Advertisement Slide
    ==========================================
    */
    var advertisementSlide = new Swiper(".advertisement-active", {
        pagination: false,
        loop:true,
        spaceBetween: 16,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
        navigation: false,
    });
    /*
    ==========================================
        11. Top Selling Product Slide
    ==========================================
    */
    var topSelling = new Swiper(".top-selling-active", {
        loop:true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".top-selling-next-icon",
            prevEl: ".top-selling-prev-icon",
        },
    });
    /*
    ==========================================
        12. Trending Product Slide
    ==========================================
    */
    var trendingProduct = new Swiper(".trending-active", {
        loop:true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".trending-next-icon",
            prevEl: ".trending-prev-icon",
        },
    });
    /*
    ==========================================
        13. Best Week Product Slide
    ==========================================
    */
    var bestWeek = new Swiper(".best-week-active", {
        loop:true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".best-week-next-icon",
            prevEl: ".best-week-prev-icon",
        },
    });
    /*
    ==========================================
        14. Top Rated Product Slide
    ==========================================
    */
    var topRatedProduct = new Swiper(".top-rated-active", {
        loop:true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".top-rated-next-icon",
            prevEl: ".top-rated-prev-icon",
        },
    });
    /*
    ==========================================
        15. Single Product Image
    ==========================================
    */
    // Zooming Image
    document.querySelectorAll('.zooming-show-image').forEach(elem => {
        let x,y, width, height;
        elem.onmouseenter = () => {
            const size = elem.getBoundingClientRect();

            x = size.x;
            y = size.y;

            width = size.width;
            height = size.height;
        };
        elem.onmousemove = e =>{
            const horizontal = (e.clientX - x) / width*100;
            const vertical = (e.clientY - y) / height*100;

            elem.style.setProperty('--x', horizontal + '%');
            elem.style.setProperty('--y', vertical + '%');
        };
    });

    // Zooming Image Slide
    var zoomingImage = new Swiper(".image-slide-active", {
        pagination: false,
        loop:false,
        spaceBetween: 5,
        breakpoints: {
            0: {
                slidesPerView: 5,
            },
            400: {
                slidesPerView: 6,
            },
            576: {
                slidesPerView: 8,
            },
            768: {
                slidesPerView: 10,
            },
            992: {
                slidesPerView: 6,
            },
            1200: {
                slidesPerView: 7,
            },
            1400: {
                slidesPerView: 6,
            },
            1500: {
                slidesPerView: 7,
            },
            1900: {
                slidesPerView: 8,
            },
        },
        navigation: {
            nextEl: ".image-slide-next-icon",
            prevEl: ".image-slide-prev-icon",
        },
    });
    /*
    ==========================================
        16. Single Product Color
    ==========================================
    */
    var colorList = document.querySelectorAll(".color-btn");
    colorList.forEach( i => {
        i.addEventListener("click",()=>{
            colorResetLinks();
            i.classList.add("active");
        })
    })
    function colorResetLinks(){
        colorList.forEach(i => {
            i.classList.remove("active")
        })
    }
    /*
    ==========================================
        17. Quantity
    ==========================================
    */
    function quantity() {
        if ( $.fn.inputSpinner ) {
            $("input[type='number']").inputSpinner({
                decrementButton: '<i class="fa-solid fa-minus"></i>',
                incrementButton: '<i class="fa-solid fa-plus"></i>',
                buttonsClass: 'btn-qty',
            });
        }
    }
    quantity();
    /*
    ==========================================
        18. Related Product Slide
    ==========================================
    */
    var relatedProduct = new Swiper(".related-product-active", {
        pagination: false,
        loop:true,
        spaceBetween: 16,
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1400: {
                slidesPerView: 5,
            },
        },
        navigation: {
            nextEl: ".related-product-next-icon",
            prevEl: ".related-product-prev-icon",
        },
    });
    /*
    ==========================================
        19. Recently View Product Slide
    ==========================================
    */
    var recentlyView = new Swiper(".recently-view-active", {
        pagination: false,
        loop:true,
        spaceBetween: 16,
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1400: {
                slidesPerView: 5,
            },
        },
        navigation: {
            nextEl: ".recently-view-next-icon",
            prevEl: ".recently-view-prev-icon",
        },
    });
    /*
    ==========================================
        20. Price Range
    ==========================================
    */
    function priceRange() {
        $(".sliderRange").slider({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function (event, ui) {
                $(".rangeAmount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $(".rangeAmount").val("$" + $(".sliderRange").slider("values", 0) + " - $" + $(".sliderRange").slider("values", 1));
    }
    priceRange()
    /*
    ==========================================
        21. Shop Select
    ==========================================
    */
    function select() {
        $('#select').niceSelect();
    }
    select()
    /*
    ==========================================
        22. Language Select
    ==========================================
    */
    function languageSelect() {
        $('#languageSelect').niceSelect();
    }
    languageSelect()
    /*
    ==========================================
        23. Counter Number
    ==========================================
    */
    $('.counter-number').each(function () {
        $(this).prop('counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    /*
    ==========================================
        24. My Popup
    ==========================================
    */
    $("#myPopup").modal('show');

});

