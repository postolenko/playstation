$(window).on("load",function(){

	getScrollBar()

});

$(window).on("resize",function(){

	getScrollBar();

});

$(document).ready(function() {		



});

function getScrollBar() {

	if( bodyWidth <= 900 ) {

		$("#main_nav").mCustomScrollbar()

	} else {

		$("#main_nav").mCustomScrollbar('destroy')

	}

}
