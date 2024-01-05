// Menu Button Function (Animation)
let clicked = false;

$("#menu").click(function() {
	if(!clicked) {
		//全体を覆うオブジェクトを表示
		$("#all-overlay").fadeIn();

		//メニューを表示
		$(".nav-header").fadeIn().animate({"right": "0"}, {
			duration: 400,
			easing: "swing",
			queue: false
		});
		
		clicked = true;
	} else {
		//メニューを非表示
		$(".nav-header").fadeOut().animate({"right": "-80px"}, {
			duration: 400,
			easing: "swing",
			queue: false
		});
		
		//全体を覆うオブジェクトを非表示
		$("#all-overlay").fadeOut();
		
		clicked = false;
	}
});

$(window).resize(function() {
	let width = $(window).innerWidth();
	
	if(width >= 1025) {
		//リサイズしたとき横幅が1025px以上だったら背景の白い半透明オブジェクトを非表示
		if(clicked) $("#all-overlay").hide();
		
		//リサイズしたとき横幅が1025px以上だったらメニューを表示
		$(".nav-header").show();
	} else {
		if(clicked) {
			//リサイズしたとき横幅が1025px未満だったら背景の白い半透明オブジェクトを表示
			$("#all-overlay").show();
			
			$(".nav-header").show();
		} else {
			$(".nav-header").hide();
		}
	}
});