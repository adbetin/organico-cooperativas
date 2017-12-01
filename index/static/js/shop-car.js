(function($) {

	"use strict";

	console.log("Se escucha evento");
	$.jStorage.listenKeyChange("cartObject", function(key, action){
		console.log(key + " has been " + action);
		console.log("index", $.jStorage.index());
        console.log("carrito", $.jStorage.get(key));
	});

})(window.jQuery);
