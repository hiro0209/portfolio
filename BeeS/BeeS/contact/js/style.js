const navs = ["home", "page", "update"];

$(function() {
	if($(window).width() >= 1025) {
		//PC版
		$("#logo").attr("src", "../images/logo-small.png");
		$("#nav_page").parent("li").css("display", "inline");
		$("#nav_update").parent("li").css("display", "inline");
		$("#nav_contact").css("color", "yellow");
		$("#nav_contact_line").css("width", "100%");
		$("#nav_contact_line").css("transition", "width 0.5s");
		for(let i = 0; i < navs.length; i++) {
			$("#nav_" + navs[i]).css("color", "white");
			$("#nav_" + navs[i]).hover(
				function() {
					$(this).css("color", "yellow");
					$("#nav_" + navs[i] + "_line").css("width", "100%");
					$("#nav_" + navs[i] + "_line").css("transition", "width 0.1s");
				},
				function() {
					$(this).css("color", "white");
					$("#nav_" + navs[i] + "_line").css("width", "0");
					$("#nav_" + navs[i] + "_line").css("transition", "width 0.8s");
				}
			);
		}
	} else {
		//スマホ版
		$("#nav_home").css("color", "aqua");
		$("#nav_contact").css("color", "aqua");
		$("#logo").attr("src", "../images/logo.png");
		$("#nav_page").parent("li").css("display", "none");
		$("#nav_update").parent("li").css("display", "none");
	}
	
	$(window).on("resize", function() {
		if($(window).width() >= 1025) {
			//PC版
			$("#logo").attr("src", "../images/logo-small.png");
			$("#nav_page").parent("li").css("display", "inline");
			$("#nav_update").parent("li").css("display", "inline");
			$("#nav_contact").css("color", "yellow");
			$("#nav_contact_line").css("width", "100%");
			$("#nav_contact_line").css("transition", "width 0.5s");
			for(let i = 0; i < navs.length; i++) {
				$("#nav_" + navs[i]).css("color", "white");
				$("#nav_" + navs[i]).hover(
					function() {
						$(this).css("color", "yellow");
						$("#nav_" + navs[i] + "_line").css("width", "100%");
						$("#nav_" + navs[i] + "_line").css("transition", "width 0.1s");
					},
					function() {
						$(this).css("color", "white");
						$("#nav_" + navs[i] + "_line").css("width", "0");
						$("#nav_" + navs[i] + "_line").css("transition", "width 0.8s");
					}
				);
			}
		} else {
			//スマホ版
			$("#nav_home").css("color", "aqua");
			$("#nav_contact").css("color", "aqua");
			$("#logo").attr("src", "../images/logo.png");
			$("#nav_page").parent("li").css("display", "none");
			$("#nav_update").parent("li").css("display", "none");
			for(let i = 0; i < navs.length; i++) {
				$("#nav_" + navs[i]).hover(
					function() {
						$(this).css("color", "aqua");
					}, 
					function() {
						$(this).css("color", "aqua");
					}
				);
			}
		}
	});
});