var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var firstSect;
var paddingTopFirsSect;

$(window).load(function() {

	$(".header_wrapp").addClass("header-fixed");

	getFooterPosition();
	getFixedHeader();
	getScrollHeaderParams();

});

$(window).resize(function() {
    
	getFooterPosition();
	getFixedHeader();
	getScrollHeaderParams();

});

$(document).ready(function() {   


});

$(document).scroll(function() {   

	getScrollHeaderParams();

});

function getFixedHeader() {

	if( $(".header_wrapp").hasClass("header-fixed") ) {

		firstSect = $(".content").find("section:eq(0)");
		paddingTopFirsSect = parseInt( firstSect.css('padding-top') );
		firstSect.css({
			"padding-top" : paddingTopFirsSect + $(".header-fixed").height() + "px"
		});

	}

}

function getFooterPosition() {

    $(".footer_section").css({
        "margin-top" : -$(".footer_section").height() + "px"
    });

    $(".wrapper").css({
        "padding-bottom" : $(".footer_section").height() + "px"
    });

}

function getScrollHeaderParams() {

	if( $(".header_wrapp").hasClass("header-fixed") ) {
		if( $(".header-fixed").offset().top > 1 ) {
			$(".header").addClass("js-scroll");
		} else {
			$(".header").removeClass("js-scroll");
		}
	}

}