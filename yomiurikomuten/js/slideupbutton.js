// Slide Up Button
const showScrollPos = 240;
let show = false;

$(function() {
	let width = $(window).innerWidth();
	let scrollTop = $(window).scrollTop();
	
	if(width >= 1025) {
		if(scrollTop >= showScrollPos) {
			$("#slideup").show();
			show = true;
		} else if(scrollTop <= showScrollPos) {
			$("#slideup").hide();
			show = false;
		}
	}
});

$(window).resize(function() {
	let width = $(window).innerWidth();
	let scrollTop = $(window).scrollTop();
	
	if(width >= 1025) {
		if(scrollTop >= showScrollPos) {
			$("#slideup").show();
			show = true;
		} else if(scrollTop <= showScrollPos) {
			$("#slideup").hide();
			show = false;
		}
	} else {
		$("#slideup").hide();
		show = false;
	}
});

$(window).scroll(function() {
	let width = $(window).innerWidth();
	let scrollTop = $(window).scrollTop();
	
	if(width >= 1025) {
		if(scrollTop >= showScrollPos && !show) {
			$("#slideup").fadeIn();
			show = true;
		} else if(scrollTop <= showScrollPos && show) {
			$("#slideup").fadeOut();
			show = false;
		}
	} else {
		$("#slideup").hide();
		show = false;
	}
});

$("#slideup").click(function() {
	$("body, html").animate({
		scrollTop: 0
	}, 500);
});

$("#slideup-small-width").click(function() {
	$("body, html").animate({
		scrollTop: 0
	}, 500);
});