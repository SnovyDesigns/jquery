(function ($) {

	$(function() {
		$('span:even').css('color', 'red');

		var p = $('p');

		p.each(function(index, el) {
			var button = $('<button></button>', {
				class: 'btn',
				text: 'Click me',
			});

			button.attr('data-tmp', index);

			$(el).append(button);
		});

		$('button').on('click', function() {
			alert($(this).attr('data-tmp')); 
		});


	});

})(jQuery);