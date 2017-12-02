(function($) {

	"use strict";

	var itemCount = 0;

	var updateItemCount = function(cartObject){
		$('.itemCount').html(cartObject.totalItems).css('display', 'inline-block');
	}

	$.jStorage.listenKeyChange("cartObject", function(key, action){
		//se actualiza el valor de los items
		updateItemCount($.jStorage.get(key));
	});

	var co = $.jStorage.get("cartObject", { totalItems: 0, data: []});
	updateItemCount(co);

})(window.jQuery);
