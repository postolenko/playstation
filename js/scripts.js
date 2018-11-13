var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var firstSect;
var paddingTopFirsSect;

$(window).load(function() {

	$(".header_wrapp").addClass("header-fixed");
    $(".steps_title").prepend("<div class='bg'></div>");

	getFooterPosition();
	getFixedHeaderParams();
	getScrollHeaderParams();
    getCustomsElemsParams();
    getAdaptivePositionElements();

});

$(window).resize(function() {

    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    
	getFooterPosition();
	getFixedHeaderParams();
	getScrollHeaderParams();
    getCustomsElemsParams();
    getAdaptivePositionElements();

});

$(document).scroll(function() {   

    getScrollHeaderParams();
    // getFixedHeaderParams();

});

$(document).ready(function() {   

	$(".show_popup").click(function(e) {

        e.preventDefault();

        popupName = $(this).attr("data-popup-name");
        popupBlock = $("[data-popup = '"+ popupName +"']");

        popupBlock.fadeIn(400);

    });

     $(this).keydown(function(eventObject){

        if (eventObject.which == 27) {

            if ( $(".popup_wrapp").is(":visible") ) {

                $(".popup_wrapp").fadeOut(300);

            }

        }

    });

    $(".close-popup").click(function() {

        popupBlock = $(this).closest(".popup_wrapp");

        popupBlock.fadeOut(300);

    });


    $(document).mouseup(function (e){

        hide_element = $('.popup');

        if (!hide_element.is(e.target)

            && hide_element.has(e.target).length === 0) {

            hide_element.closest(".popup_wrapp").fadeOut(300);
        }

    });

    // ---------------------

    $(".dropdown_wrapp").each( function() {

        $(this).find(".dropdown_list").css({
            "display" : "none"
        });

    });

    $(".dropdown_title").click(function(e) {

        e.preventDefault();

        parentBlock = $(this).closest(".dropdown_wrapp");

        var dropdownList = parentBlock.find(".dropdown_list");

        if( dropdownList.is(":hidden") ) {

            dropdownList.slideDown(300);
            parentBlock.addClass("active");

        } else {

            dropdownList.slideUp(300);
            parentBlock.removeClass("active");

        }

    });

    $(document).mouseup(function (e){

        hide_element = $('.dropdown_list');

        if (!hide_element.is(e.target)

            && hide_element.has(e.target).length === 0) {

            parentBlock = hide_element.closest(".dropdown_wrapp");
            hide_element.slideUp(300);
            parentBlock.removeClass("active");
        }

    });

    $(this).keydown(function(eventObject){

        if (eventObject.which == 27) {

            $('.dropdown_list').slideUp(300);

        }

    });

    // ----------------------

    $(".scroll-down_btn").click(function(e) {

        e.preventDefault();
        parentBlock = $(this).closest("section");
        var bottomCoord = parentBlock.offset().top + parentBlock.height();

        $("html, body").animate({
            scrollTop: bottomCoord
        }, 700);

    });

    // ----------------------

    if( $(".loading").length > 0 ) {

        var countCircles = $(".loading span").length;
        var index = 0;
        var clearAnimationInterval;

        getLoadingAnimation(countCircles,0);

    }

    // ----------------------

    $(".respmenubtn").click(function() {

        if( $("#main_nav").is(":hidden") ) {

            $("#main_nav").fadeIn(300);

            $(this).addClass("active");

        } else {

            $("#main_nav").fadeOut(300);

            $(this).removeClass("active");

        }

    });

    $(this).keydown(function(eventObject){

        if (eventObject.which == 27 &&
            $("#main_nav").is(":visible") ) {

                $("#main_nav").fadeOut(300);

                $(".respmenubtn").removeClass("active");

        }

    });

});

function getLoadingAnimation(countCircles,index) {

    clearAnimationInterval = setInterval(function() {

        if( index > 0 ) {
            $(".loading span:eq("+ ( index - 1 ) +")").removeClass("active");
        }

        $(".loading span:eq("+ index +")").addClass("active");        

        if( index > countCircles - 1 ) {
            $(".loading span:eq("+ index +")").removeClass("active");
            clearInterval(clearAnimationInterval);
            getLoadingAnimation(countCircles,0);
        }

        console.log(index);

        ++index;

    }, 600);

}

function getFixedHeaderParams() {

	if( $(".header_wrapp").hasClass("header-fixed") ) {
		firstSect = $(".content").find("section:eq(0)");
		firstSect.css({
			"padding-top" : "0"
		});
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
		if( $(".header-fixed").offset().top > 0 ) {
			$(".header").addClass("js-scroll");
		} else {
			$(".header").removeClass("js-scroll");
		}
	}

}

function getCustomsElemsParams() {

    $(".steps_title .bg").each(function() {

        parentBlock = $(this).closest(".steps_title");
        $(this).css({
            "width" : parentBlock.offset().left + "px"
        });

    });

}

function getAdaptivePositionElements() {

    $(".append-elem").each(function() {

        screenParam = parseInt( $(this).attr("data-min-screen") );

        indexElem = $(this).attr("data-append-desktop-elem");

        if( bodyWidth <= screenParam ) {

            $("[data-append-elem = '"+ indexElem +"']").append($(this).children());

        }

         if( bodyWidth > screenParam ) {

            $("[data-append-desktop-elem = '"+ indexElem +"']").append($("[data-append-elem = '"+ indexElem +"']").children());

        }

    });

}