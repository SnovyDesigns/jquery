(function ($) {

	$(function() {
		var carousel = $('#carousel'),
			carouselList = $('#carousel-container'),
			carouselItems = carouselList.find('li'),
			itemWidth = carouselItems.eq(0).width(),
			itemsCount = carouselItems.length,
			carouselNav = $('#carousel-nav');

		carouselList.css('width', itemsCount * itemWidth);

		carouselItems.each(function(index, el) {
			var that = $(this),
				img = that.find('img').hide(),
				imgSrc = img.attr('src');
			
			that.css('background-image', 'url(' + imgSrc + ')');
		});

		function moveSlide () {
			var firstItem = carouselList.find('li:first'),
				lastItem = carouselList.find('li:last');

			lastItem.after(firstItem);

			carouselList.css('margin-left', 0);
		}

		function changeSlide () {
			carouselList.animate({'margin-left': -itemWidth}, 600, moveSlide); 
		}

		var autoSlide = setInterval(changeSlide, 5000); 

		carousel.hover(function() {
			clearInterval(autoSlide);
		}, function() {
			autoSlide = setInterval(changeSlide, 5000); 
		});

	});
		
	
})(jQuery);