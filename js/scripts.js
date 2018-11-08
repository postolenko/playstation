var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).load(function() {

	$(".header_wrapp").addClass("header-fixed");

	getFooterPosition();
	getFixedHEader();
	getScrollHeaderParams();

});

$(window).resize(function() {
    
	getFooterPosition();

});

$(document).ready(function() {   


});

$(document).scroll(function() {   

	getScrollHeaderParams();

});

function getFixedHEader() {

	if( $(".header_wrapp").hasClass("header-fixed") ) {

		var firstSect = $(".content").find("section:eq(0)");
		var paddingTopFirsSect = parseInt( firstSect.css('padding-top') );
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

	if( $(".header-fixed").offset().top > 1 ) {

		$(".header").addClass("js-scroll");

	} else {

		$(".header").removeClass("js-scroll");

	}

	console.log( $(".header-fixed").offset().top );

}