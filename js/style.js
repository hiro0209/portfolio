//load & resize
$(window).on("load resize", () => {
	let width = $(window).width();
	let height = $(window).height();
	
	//SNSリンク
	if(!isHomeSnslinksAnime()) {
		if(width >= 1025) {
			let homeContentWidth = $(".home").children(".home-content").width();
			$(".home").find(".sns-links").css({"top": "70px", "right": (homeContentWidth * 0.5 + 30) + "px"});
		} else if(width < 1025 && width > 599) {
			$(".home").find(".sns-links").css({"top": (width * 0.2 + 55) + "px", "right": (width * 0.5 + 25) + "px"});
		} else if(width <= 599) {
			$(".home").find(".sns-links").css({"top": (width * 0.4 + 40) + "px", "right": (width * 0.5 + 20) + "px"});
		}
	} else {
		let ele = $(".home").find(".sns-links");
		if(width >= 1025) {
			let homeContentWidth = $(".home").children(".home-content").width();
			ele.css({"top": "-70px", "right": (homeContentWidth * 0.3 + 40) + "px"});
		} else if(width < 1025 && width > 599) {
			ele.css({"top": (width * 0.2 - 60) + "px", "right": (width * 0.4 + 20) + "px"});
		} else if(width <= 599) {
			ele.css({"top": (width * 0.4 - 60) + "px", "right": (width * 0.4) + "px"});
		}
	}

	
	//プロフィールスタイル
	/*if(width > 599) {
		let eles = $(".profile").find(".textarea").children();
		for(let i = 0; i < eles.length; i++) {
			let eles2 = eles.eq(i).children();
			if(eles2.length == 2) {
				eles2.eq(1).addClass("sent-right");
			}
		}
	} else {
		let eles = $(".profile").find(".textarea").children();
		for(let i = 0; i < eles.length; i++) {
			let eles2 = eles.eq(i).children();
			if(eles2.length == 2) {
				eles2.eq(1).removeClass("sent-right");
			}
		}
	}*/
});