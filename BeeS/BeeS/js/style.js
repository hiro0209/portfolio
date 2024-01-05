$(function() {
	//スタートアニメーション
	const start = anime.timeline({
		targets: "#start_ball",
		loop: false,
		duration: 600,
		complete: function(animation) {
			$("#start_super").remove();
		}
	});
	start.add({
		translateY: [-($(window).height() / 2), 0],
		complete: function(animation) {
			$("#start_ball").css("border-radius", "0");
			$("#start_ball").css("width", "100%");
			$("#start_ball").css("transition", "width 0.1s");
		}
	});
	start.add({
		begin: function(animation) {
			$("#start_ball").css("height", "100%");
			$("#start_ball").css("transition", "height 0.2s");
		}
	});
	start.add({
		targets: "#start_logo .lines path",
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: "easeInOutSine",
		duration: 1000,
		loop: false,
		begin: function(animation) {
			$("#start_logo").children(".lines").css("stroke", "black");
		}
	});
	start.add({
		delay: 1000,
		begin: function(animation) {
			$("#start_back").css("visibility", "hidden");
			$("#start_ball").css("background-color", "rgba(0, 0, 0, 0)");
			$("#start_logo").children(".lines").css("stroke", "rgba(0, 0, 0, 0)");
			$("#start_ball").css("transition", "0.8s");
		}
	});
	
	if($(window).width() >= 1025) {
		//PC版スタイル調整
		$("#nav_home").children("a").hover(
			function() {
				$("#nav_home").css("box-shadow", "4px 4px 20px 4px white, -4px -4px 20px 4px white, -4px 4px 20px 4px white, 4px -4px 20px 4px white");
				$("#nav_home").css("transition", "box-shadow 0.5s");
			},
			function() {
				$("#nav_home").css("box-shadow", "1px 1px 5px 1px white, -1px -1px 5px 1px white, -1px 1px 5px 1px white, 1px -1px 5px 1px white");
				$("#nav_home").css("transition", "box-shadow 0.3s");
			}
		);
		$("#nav_company").children("a").hover(
			function() {
				$("#nav_company").css("box-shadow", "4px 4px 20px 4px white, -4px -4px 20px 4px white, -4px 4px 20px 4px white, 4px -4px 20px 4px white");
				$("#nav_company").css("transition", "box-shadow 0.5s");
			},
			function() {
				$("#nav_company").css("box-shadow", "1px 1px 5px 1px white, -1px -1px 5px 1px white, -1px 1px 5px 1px white, 1px -1px 5px 1px white");
				$("#nav_company").css("transition", "box-shadow 0.3s");
			}
		);
		$("#nav_contact").children("a").hover(
			function() {
				$("#nav_contact").css("box-shadow", "4px 4px 20px 4px white, -4px -4px 20px 4px white, -4px 4px 20px 4px white, 4px -4px 20px 4px white");
				$("#nav_contact").css("transition", "box-shadow 0.5s");
			},
			function() {
				$("#nav_contact").css("box-shadow", "1px 1px 5px 1px white, -1px -1px 5px 1px white, -1px 1px 5px 1px white, 1px -1px 5px 1px white");
				$("#nav_contact").css("transition", "box-shadow 0.3s");
			}
		);
	} else {
		//スマホ版スタイル調整
		$("#logo").children("img").attr("src", "images/logo-small.png");
		$("#nav_home").css("box-shadow", "0 0");
		$("#nav_company").css("box-shadow", "0 0");
		$("#nav_contact").css("box-shadow", "0 0");
		$("#nav_home").children("a").hover(
			function() {
				$("#nav_home").css("box-shadow", "0 0");
			},
			function() {
				$("#nav_home").css("box-shadow", "0 0");
			}
		);
		$("#nav_company").children("a").hover(
			function() {
				$("#nav_company").css("box-shadow", "0 0");
			},
			function() {
				$("#nav_company").css("box-shadow", "0 0");
			});
		$("#nav_contact").children("a").hover(
			function() {
				$("#nav_contact").css("box-shadow", "0 0");
			},
			function() {
				$("#nav_contact").css("box-shadow", "0 0");
			}
		);
		$("#start_super").remove();
	}
	$(window).on("resize", function() {
		if($(window).width() >= 1025) {
			//PC版スタイル調整
			$("#nav_home").children("a").hover(
				function() {
					$("#nav_home").css("box-shadow", "4px 4px 20px 4px white, -4px -4px 20px 4px white, -4px 4px 20px 4px white, 4px -4px 20px 4px white");
					$("#nav_home").css("transition", "box-shadow 0.5s");
				},
				function() {
					$("#nav_home").css("box-shadow", "1px 1px 5px 1px white, -1px -1px 5px 1px white, -1px 1px 5px 1px white, 1px -1px 5px 1px white");
					$("#nav_home").css("transition", "box-shadow 0.3s");
				}
			);
			$("#nav_company").children("a").hover(
				function() {
					$("#nav_company").css("box-shadow", "4px 4px 20px 4px white, -4px -4px 20px 4px white, -4px 4px 20px 4px white, 4px -4px 20px 4px white");
					$("#nav_company").css("transition", "box-shadow 0.5s");
				},
				function() {
					$("#nav_company").css("box-shadow", "1px 1px 5px 1px white, -1px -1px 5px 1px white, -1px 1px 5px 1px white, 1px -1px 5px 1px white");
					$("#nav_company").css("transition", "box-shadow 0.3s");
				}
			);
			$("#nav_contact").children("a").hover(
				function() {
					$("#nav_contact").css("box-shadow", "4px 4px 20px 4px white, -4px -4px 20px 4px white, -4px 4px 20px 4px white, 4px -4px 20px 4px white");
					$("#nav_contact").css("transition", "box-shadow 0.5s");
				},
				function() {
					$("#nav_contact").css("box-shadow", "1px 1px 5px 1px white, -1px -1px 5px 1px white, -1px 1px 5px 1px white, 1px -1px 5px 1px white");
					$("#nav_contact").css("transition", "box-shadow 0.3s");
				}
			);
		} else {
			//スマホ版スタイル調整
			$("#logo").children("img").attr("src", "images/logo-small.png");
			$("#nav_home").css("box-shadow", "0 0");
			$("#nav_company").css("box-shadow", "0 0");
			$("#nav_contact").css("box-shadow", "0 0");
			$("#nav_home").children("a").hover(
				function() {
					$("#nav_home").css("box-shadow", "0 0");
				},
				function() {
					$("#nav_home").css("box-shadow", "0 0");
				}
			);
			$("#nav_company").children("a").hover(
				function() {
					$("#nav_company").css("box-shadow", "0 0");
				},
				function() {
					$("#nav_company").css("box-shadow", "0 0");
				});
			$("#nav_contact").children("a").hover(
				function() {
					$("#nav_contact").css("box-shadow", "0 0");
				},
				function() {
					$("#nav_contact").css("box-shadow", "0 0");
				}
			);
			$("#start_super").remove();
		}
	});
});