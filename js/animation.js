let showingHome = false;
let showingProfile = false;
let showingContent = false;
let showingContact = false;
let showingPublicity = false;
let showingPagelist = false;
let navbackAnimePagelistComp = false;
let homeSnslinksAnime = false;
let homeSnslinksAnime2 = false;
let nowHomeSnslinksAnime = false;

//スタートアニメーション
const navbackAnimation = () => {
	let svg = $("#navback");
	let width = $(window).width();
	let height = $(window).height();
	let widthCount = $(window).width();
	let path = "M0,0 L" + width + ",0 " + width + "," + height + " 0," + height + " T0 0";
	svg.attr("viewBox", "0 0 " + width + " " + height);
	svg.children("path").attr("d", path);
	let timer = setInterval(() => {
		widthCount -= width * 0.005;
		if(width >= 1025) {
			if(widthCount > width * 0.2) {
				path = "M" + ((width - widthCount) * 0.9) + ",0 L" + width + ",0 " + width + "," + height + " " + ((width - widthCount) * 0.9) + "," + height + " Q" + ((width - widthCount)) + " " + (height / 2 * 2 - height / 20) + " " + ((width - widthCount)) + " " + (height / 2) + " T" + ((width - widthCount) * 0.9) + " 0";
				svg.children("path").attr("d", path);
			} else {
				glowProfileIcon();
				toolbarPopup();
				clearInterval(timer);
			}
		} else {
			if(widthCount > 0) {
				path = "M" + ((width - widthCount) * 0.9) + ",0 L" + width + ",0 " + width + "," + height + " " + ((width - widthCount) * 0.9) + "," + height + " Q" + ((width - widthCount)) + " " + (height / 2 * 2 - height / 20) + " " + ((width - widthCount)) + " " + (height / 2) + " T" + ((width - widthCount) * 0.9) + " 0";
				svg.children("path").attr("d", path);
			} else {
				svg.children("path").attr("d", "");
				glowProfileIcon();
				toolbarPopup();
				clearInterval(timer);
			}
		}
	}, 6);
}
navbackAnimation();

const toolbarPopup = () => {
	$("header").css("opacity", "1");
	setTimeout(() => {
		let ele = $("header").find("i");
		ele.css({"transition": "text-shadow 1s", "text-shadow": "2px 2px 5px white"});
	}, 500);
	showMenu();
}

const glowProfileIcon = () => {
	let ele = $(".home").find("#profile-icon");
	ele.css({"box-shadow": "0 0 30px 0.1px white", "z-index": "4"});
	ele.hover(() => {
		ele.addClass("profile-icon-hover");
	}, () => {
		ele.removeClass("profile-icon-hover");
	});
}

const showMenu = () => {
	let width = $(window).width();
	if(width >= 1025) {
		$(".home").find("nav").slideToggle();
	}
	
	$(".groval-nav").find(".nav_home").attr("onClick", "");
	$(".groval-nav").find(".nav_profile").attr("onClick", "changePage('profile', 'home')");
	$(".groval-nav").find(".nav_content").attr("onClick", "changePage('content', 'home')");
	$(".groval-nav").find(".nav_contact").attr("onClick", "changePage('contact', 'home')");
	$(".groval-nav").find(".nav_publicity").attr("onClick", "changePage('publicity', 'home')");
	showingHome = false;
}

const navbackAnimationFromPagelist = () => {
	let width = $(window).width();
	let height = $(window).height();
	let svg = $("#navback");
	let path;
	let widthCount = width;
	let heightCount = height;
	let animeComp = false;
	let anime2CompWidth = false;
	let anime2CompHeight = false;
	$(".pagelist").find("nav").slideUp();
	setTimeout(() => {
		$(".pagelist").children(".wrap").css("opacity", "0");
	}, 500);
	setTimeout(() => {
		hidePage();
		let timer = setInterval(() => {
			widthCount -= width * 0.01;
			if(widthCount > 0) {
				path = ath = "M" + ((width - widthCount) * 0.9) + ",0 L" + width + ",0 " + width + "," + height + " " + ((width - widthCount) * 0.9) + "," + height + " Q" + ((width - widthCount)) + " " + (height / 2 * 2 - height / 20) + " " + ((width - widthCount)) + " " + (height / 2) + " T" + ((width - widthCount) * 0.9) + " 0";
				svg.children("path").attr("d", path);
			} else {
				svg.children("path").attr("d", "");
				animeComp = true;
				clearInterval(timer);
			}
		}, 6);
	}, 1000);
	let timer = setInterval(() => {
		if(animeComp) {
			path = "M" + (width * 0.2) + "," + (height * 0.2) + " L" + (width * 0.8) + "," + (height * 0.2) + " " + (width * 0.8) + "," + (height * 0.8) + " " + (width * 0.2) + "," + (height * 0.8) + " T" + (width * 0.2) + " " + (height * 0.2);
			svg.children("path").attr("d", path);
			svg.css("top", -height + "px");
			setTimeout(() => {
				svg.css({"transition": "top 0.5s", "top": "0"});
			}, 500);
			setTimeout(() => {
				widthCount = width * 0.8;
				heightCount = height * 0.8;
				let timer2 = setInterval(() => {
					if(!anime2CompWidth) widthCount += width * 0.005;
					if(!anime2CompHeight) heightCount += height * 0.005;
					if(widthCount >= width) {
						widthCount = width;
						anime2CompWidth = true;
					}
					if(heightCount >= height) {
						heightCount = height;
						anime2CompHeight = true;
					}
					path = "M" + (width - widthCount) + "," + (height - heightCount) + " L" + widthCount + "," + (height - heightCount) + " " + widthCount + "," + heightCount + " " + (width - widthCount) + "," + heightCount + " T" + (width - widthCount) + " " + (height - heightCount);
					svg.children("path").attr("d", path);
					if(anime2CompWidth && anime2CompHeight) {
						svg.attr("style", "");
						navbackAnimePagelistComp = true;
						clearInterval(timer2);
					}
				}, 5);
			}, 1000);
			clearInterval(timer);
		}
	}, 6);
}

const navbackAnimationToPagelist = () => {
	let svg = $("#navback");
	let width = $(window).width();
	let height = $(window).height();
	let path;
	let lastpath = "M0,0 L" + width + ",0 " + width + "," + height + " 0," + height + " T0 0";
	let widthCount = width;
	let heightCount = height;
	let animeComp = false;
	let animeCompWidth = false;
	let animeCompHeight = false;
	let timer = setInterval(() => {
		if(!animeCompWidth) widthCount -= width * 0.005;
		if(!animeCompHeight) heightCount -= height * 0.005;
		if(widthCount <= width * 0.6) {
			widthCount = width * 0.6;
			animeCompWidth = true;
		}
		if(heightCount <= height * 0.6) {
			heightCount = height * 0.6;
			animeCompHeight = true;
		}
		path = "M" + (width - widthCount) + "," + (height - heightCount) + " L" + widthCount + "," + (height - heightCount) + " " + widthCount + "," + heightCount + " " + (width - widthCount) + "," + heightCount + " T" + (width - widthCount) + " " + (height - heightCount);
		svg.children("path").attr("d", path);
		if(animeCompWidth && animeCompHeight) {
			animeComp = true;
			clearInterval(timer);
		}
	}, 5);
	let timer2 = setInterval(() => {
		if(animeComp) {
			svg.css({"transition": "top 0.5s", "top": -height + "px"});
			widthCount = width;
			setTimeout(() => {
				svg.attr("style", "");
				let timer3 = setInterval(() => {
					if(widthCount > 0) {
						widthCount -= width * 0.01;
						path = path = "M" + (widthCount * 0.9) + ",0 L" + width + ",0 " + width + "," + height + " " + (widthCount * 0.9) + "," + height + " Q" + widthCount + " " + (height / 2 * 2 - height / 20) + " " + widthCount + " " + (height / 2) + " T" + (widthCount * 0.9) + " 0";
						svg.children("path").attr("d", path);
					} else {
						svg.children("path").attr("d", lastpath);
						hidePage();
						$("header").hide();
						$(".pagelist").show();
						setTimeout(() => {
							$(".pagelist").children(".wrap").css("opacity", "1");
						}, 500);
						setTimeout(() => {
							$(".pagelist").find("nav").slideToggle();
							showingPagelist = false;
						}, 1000);
						clearInterval(timer3);
					}
				}, 6);
			}, 500);
			clearInterval(timer2);
		}
	}, 5);
}

const changePageAnimation = toPageID => {
	let svg = $("#navback");
	let width = $(window).width();
	let height = $(window).height();
	let path;
	let lastpath = "M0,0 L" + width + ",0 " + width + "," + height + " 0," + height + " T0 0";
	let widthCount = width;
	let heightCount = height;
	let animeComp = false;
	let animeCompWidth = false;
	let animeCompHeight = false;
	let timer = setInterval(() => {
		if(!animeCompWidth) widthCount -= width * 0.005;
		if(!animeCompHeight) heightCount -= height * 0.005;
		if(widthCount <= width * 0.6) {
			widthCount = width * 0.6;
			animeCompWidth = true;
		}
		if(heightCount <= height * 0.6) {
			heightCount = height * 0.6;
			animeCompHeight = true;
		}
		path = "M" + (width - widthCount) + "," + (height - heightCount) + " L" + widthCount + "," + (height - heightCount) + " " + widthCount + "," + heightCount + " " + (width - widthCount) + "," + heightCount + " T" + (width - widthCount) + " " + (height - heightCount);
		svg.children("path").attr("d", path);
		if(animeCompWidth && animeCompHeight) {
			animeComp = true;
			clearInterval(timer);
		}
	}, 5);
	let timer2 = setInterval(() => {
		if(animeComp) {
			svg.css({"transition": "top 0.5s", "top": -height + "px"});
			widthCount = width;
			setTimeout(() => {
				svg.attr("style", "");
				let timer3 = setInterval(() => {
					if(widthCount > 0) {
						widthCount -= width * 0.01;
						path = path = "M" + (widthCount * 0.9) + ",0 L" + width + ",0 " + width + "," + height + " " + (widthCount * 0.9) + "," + height + " Q" + widthCount + " " + (height / 2 * 2 - height / 20) + " " + widthCount + " " + (height / 2) + " T" + (widthCount * 0.9) + " 0";
						svg.children("path").attr("d", path);
					} else {
						svg.children("path").attr("d", lastpath);
						hidePage();
						$("haeder").css({"transition": "opacity 0.5s", "opacity": "0"});
						$("." + toPageID).show();
						if(toPageID == "content") contentCardPoditionControl();
						setTimeout(() => {
							$("." + toPageID).children(".wrap").css("opacity", "1");
						}, 500);
						setTimeout(() => {
							$("header").css("opacity", "1");
							setTimeout(() => {
								$("header").css("transition", "opacity 0");
							}, 500);
							switch(toPageID) {
								case "profile": showingProfile = false; break;
								case "content": showingContent = false; break;
								case "contact": showingContact = false; break;
								case "publicity": showingPublicity = false; break;
							}
						}, 1000);
						clearInterval(timer3);
					}
				}, 6);
			}, 500);
			clearInterval(timer2);
		}
	}, 5);
}

const changePage = (pageID, nowPageID) => {
	switch(pageID) {
		case "home": showHome(nowPageID); break;
		case "profile": showProfile(nowPageID); break;
		case "content": showContent(nowPageID); break;
		case "contact": showContact(nowPageID); break;
		case "publicity": showPublicity(nowPageID); break;
		case "pagelist": showPagelist(nowPageID); break;
	}
}

const showHome = nowPageID => {
	let width = $(window).width();
	
	if(!showingHome) {
		$(".groval-nav").slideUp();
		showingHome = true;
		if(width >= 1025) {
			$("header").children("#menubar").attr("onClick", "changePage('pagelist', 'home');");
		} else {
			$("header").children("#menubar").attr("onClick", "$('.groval-nav').slideToggle();");
		}
		if(nowPageID == "pagelist") {
			$(".pagelist").find("nav").slideUp();
			setTimeout(() => {
				$(".pagelist").children(".wrap").css("opacity", "0");
			}, 500);
			setTimeout(() => {
				hidePage();
				$(".home").show();
				$("header").show();
				navbackAnimation();
				let timer = setInterval(() => {
					if(!showingHome) {
						$("header").css({"transition": "opacity 0.5s", "opacity": "1"})
						setTimeout(() => {
							$("header").css("transition", "opacity 0");
						}, 500);
						clearInterval(timer);
					}
				}, 1);
			}, 1000);
		} else if(nowPageID == "profile") {
			$(".profile").children(".wrap").css("opacity", "0");
			$("header").css({"transition": "opacity 0.5s", "opacity": "0"});
			setTimeout(() => {
				hidePage();
				$(".home").show();
				$("header").children("#backhome").hide();
				$("header").children("#menubar").css("margin-left", "auto");
				navbackAnimation();
				let timer = setInterval(() => {
					if(!showingHome) {
						$("header").css({"transition": "opacity 0.5s", "opacity": "1"});
						setTimeout(() => {
							$("header").css("transition", "opacity 0");
							clearInterval(timer);
						}, 500);
					}
				}, 1);
			}, 500);
		} else if(nowPageID == "content") {
			$(".content").children(".wrap").css("opacity", "0");
			$("header").css({"transition": "opacity 0.5s", "opacity": "0"});
			setTimeout(() => {
				hidePage();
				$(".home").show();
				$("header").children("#backhome").hide();
				$("header").children("#menubar").css("margin-left", "auto");
				navbackAnimation();
				let timer = setInterval(() => {
					if(!showingHome) {
						$("header").css({"transition": "opacity 0.5s", "opacity": "1"});
						setTimeout(() => {
							$("header").css("transition", "opacity 0");
							clearInterval(timer);
						}, 500);
					}
				}, 1);
			}, 500);
		} else if(nowPageID == "contact") {
			$(".contact").children(".wrap").css("opacity", "0");
			$("header").css({"transition": "opacity 0.5s", "opacity": "0"});
			setTimeout(() => {
				hidePage();
				$(".home").show();
				$("header").children("#backhome").hide();
				$("header").children("#menubar").css("margin-left", "auto");
				navbackAnimation();
				let timer = setInterval(() => {
					if(!showingHome) {
						$("header").css({"transition": "opacity 0.5s", "opacity": "1"});
						setTimeout(() => {
							$("header").css("transition", "opacity 0");
							clearInterval(timer);
						}, 500);
					}
				}, 1);
			}, 500);
		}
	}
}

const showProfile = nowPageID => {
	if(!showingProfile) {
		let width = $(window).width();
		let height = $(window).height();
		let svg = $("#navback");
		showingProfile = true;
		$("header").children("#menubar").attr("onClick", "changePage('pagelist', 'profile');");
		if(nowPageID == "home") {
			let lastpath = "M0,0 L" + width + ",0 " + width + "," + height + " 0," + height + " T0 0";
			let path;
			let widthCount = width;
			$(".home").find("nav").slideUp();
			$(".home").find("#profile-icon").css("z-index", "1");
			homeSnslinksAnime = true;
			homeSnslinksAnimation();
			setTimeout(() => {
				let timer = setInterval(() => {
					if(widthCount > 0) {
						widthCount -= width * 0.01;
						path = path = "M" + (widthCount * 0.9) + ",0 L" + width + ",0 " + width + "," + height + " " + (widthCount * 0.9) + "," + height + " Q" + widthCount + " " + (height / 2 * 2 - height / 20) + " " + widthCount + " " + (height / 2) + " T" + (widthCount * 0.9) + " 0";
						svg.children("path").attr("d", path);
					} else {
						svg.children("path").attr("d", lastpath);
						hidePage();
						$("header").hide();
						$("header").css("opacity", "0");
						$(".profile").show();
						setTimeout(() => {
							$(".profile").children(".wrap").css("opacity", "1");
						}, 500);
						setTimeout(() => {
							$("header").show();
							$("header").children("#backhome").show();
							$("header").children("#backhome").attr("onClick", "changePage('home', 'profile')");
							$("header").children("#menubar").css("margin-left", "0");
							$("header").css({"transition": "opacity 0.5s", "opacity": "1"});
						}, 1000);
						setTimeout(() => {
							$("header").css("transition", "opacity 0");
							showingProfile = false;
						}, 1500);
						clearInterval(timer);
					}
				}, 6);
			}, 500);
		} else if(nowPageID == "pagelist") {
			navbackAnimationFromPagelist();
			let timer = setInterval(() => {
				if(navbackAnimePagelistComp) {
					$(".profile").show();
					$("header").show();
					$("header").children("#backhome").show();
					$("header").children("#backhome").attr("onClick", "changePage('home', 'profile')");
					$("header").css({"transition": "opacity 0.5s", "opacity": "1"});
					$("header").children("#backhome").show();
					$("header").children("#backhome").attr("onClick", "changePage('home', 'profile')");
					$("header").children("#menubar").css("margin-left", "0");
					$(".profile").children(".wrap").css("opacity", "1");
					setTimeout(() => {
						$("header").css("transition", "opacity 0");
					}, 500);
					navbackAnimePagelistComp = false;
					showingProfile = false;
					clearInterval(timer);
				}
			}, 5);
		} else {
			let widthCount = width;
			let heightCount = height;
			let path;
			$("." + nowPageID).children(".wrap").css("opacity", "0");
			$("header").css({"transition": "opacity 0.5s", "opacity": "0"});
			setTimeout(() => {
				$("header").children("#backhome").show();
				$("header").children("#backhome").attr("onClick", "changePage('home', 'profile')");
				$("header").children("#menubar").css("margin-left", "0");
				$("." + nowPageID).hide();
				$("header").attr("transition", "opacity 0");
				changePageAnimation("profile");
			}, 500);
		}
		
		$(".groval-nav").find(".nav_home").attr("onClick", "changePage('home', 'profile')");
		$(".groval-nav").find(".nav_profile").attr("onClick", "");
		$(".groval-nav").find(".nav_content").attr("onClick", "changePage('content', 'profile')");
		$(".groval-nav").find(".nav_contact").attr("onClick", "changePage('contact', 'profile')");
		$(".groval-nav").find(".nav_publicity").attr("onClick", "changePage('publicity', 'profile')");
		$("header").children("#menubar").attr("onClick", "$('.groval-nav').slideToggle();");
	}
}

const showContent = nowPageID => {
	if(!showingContent) {
		let width = $(window).width();
		let height = $(window).height();
		let svg = $("#navback");
		showingContent = true;
		$("header").children("#menubar").attr("onClick", "changePage('pagelist', 'content');");
		if(nowPageID == "home") {
			let lastpath = "M0,0 L" + width + ",0 " + width + "," + height + " 0," + height + " T0 0";
			let path;
			let widthCount = width;
			$(".home").find("nav").slideUp();
			$(".home").find("#profile-icon").css("z-index", "1");
			homeSnslinksAnime = true;
			homeSnslinksAnimation();
			setTimeout(() => {
				let timer = setInterval(() => {
					if(widthCount > 0) {
						widthCount -= width * 0.01;
						path = path = "M" + (widthCount * 0.9) + ",0 L" + width + ",0 " + width + "," + height + " " + (widthCount * 0.9) + "," + height + " Q" + widthCount + " " + (height / 2 * 2 - height / 20) + " " + widthCount + " " + (height / 2) + " T" + (widthCount * 0.9) + " 0";
						svg.children("path").attr("d", path);
					} else {
						svg.children("path").attr("d", lastpath);
						hidePage();
						$("header").hide();
						$("header").css("opacity", "0");
						$(".content").show();
						setTimeout(() => {
							$(".content").children(".wrap").css("opacity", "1");
						}, 500);
						setTimeout(() => {
							$("header").show();
							$("header").children("#backhome").show();
							$("header").children("#backhome").attr("onClick", "changePage('home', 'content')");
							$("header").children("#menubar").css("margin-left", "0");
							$("header").css({"transition": "opacity 0.5s", "opacity": "1"});
						}, 1000);
						setTimeout(() => {
							$("header").css("transition", "opacity 0");
							showingContent = false;
						}, 1500);
						clearInterval(timer);
					}
				}, 6);
			}, 500);
		} else if(nowPageID == "pagelist") {
			navbackAnimationFromPagelist();
			let timer = setInterval(() => {
				if(navbackAnimePagelistComp) {
					$(".content").show();
					$("header").show();		
					$("header").css({"transition": "opacity 0.5s", "opacity": "1"});
					$("header").children("#backhome").show();
					$("header").children("#backhome").attr("onClick", "changePage('home', 'content')");
					$("header").children("#menubar").css("margin-left", "0");
					$(".content").children(".wrap").css("opacity", "1");
					setTimeout(() => {
						$("header").css("transition", "opacity 0");
					}, 500);
					navbackAnimePagelistComp = false;
					showingContent = false;
					clearInterval(timer);
				}
			}, 5);
		} else {
			let widthCount = width;
			let heightCount = height;
			let path;
			$("." + nowPageID).children(".wrap").css("opacity", "0");
			$("header").css({"transition": "opacity 0.5s", "opacity": "0"});
			setTimeout(() => {
				$("header").children("#backhome").show();
				$("header").children("#backhome").attr("onClick", "changePage('home', 'content')");
				$("header").children("#menubar").css("margin-left", "0");
				$("." + nowPageID).hide();
				$("header").attr("transition", "opacity 0");
				changePageAnimation("content");
			}, 500);
		}
		
		$(".groval-nav").find(".nav_home").attr("onClick", "changePage('home', 'content')");
		$(".groval-nav").find(".nav_profile").attr("onClick", "changePage('profile', 'content')");
		$(".groval-nav").find(".nav_content").attr("onClick", "");
		$(".groval-nav").find(".nav_contact").attr("onClick", "changePage('contact', 'content')");
		$(".groval-nav").find(".nav_publicity").attr("onClick", "changePage('publicity', 'content')");
		$("header").children("#menubar").attr("onClick", "$('.groval-nav').slideToggle();");
	}
}

const showContact = nowPageID => {
	if(!showingContact) {
		let width = $(window).width();
		let height = $(window).height();
		let svg = $("#navback");
		showingContact = true;
		$("header").children("#menubar").attr("onClick", "changePage('pagelist', 'contact');");
		if(nowPageID == "home") {
			let lastpath = "M0,0 L" + width + ",0 " + width + "," + height + " 0," + height + " T0 0";
			let path;
			let widthCount = width;
			$(".home").find("nav").slideUp();
			$(".home").find("#profile-icon").css("z-index", "1");
			homeSnslinksAnime = true;
			homeSnslinksAnimation();
			setTimeout(() => {
				let timer = setInterval(() => {
					if(widthCount > 0) {
						widthCount -= width * 0.01;
						path = path = "M" + (widthCount * 0.9) + ",0 L" + width + ",0 " + width + "," + height + " " + (widthCount * 0.9) + "," + height + " Q" + widthCount + " " + (height / 2 * 2 - height / 20) + " " + widthCount + " " + (height / 2) + " T" + (widthCount * 0.9) + " 0";
						svg.children("path").attr("d", path);
					} else {
						svg.children("path").attr("d", lastpath);
						hidePage();
						$("header").hide();
						$("header").css("opacity", "0");
						$(".contact").show();
						contentCardPoditionControl();
						setTimeout(() => {
							$(".contact").children(".wrap").css("opacity", "1");
						}, 500);
						setTimeout(() => {
							$("header").show();
							$("header").children("#backhome").show();
							$("header").children("#backhome").attr("onClick", "changePage('home', 'contact')");
							$("header").children("#menubar").css("margin-left", "0");
							$("header").css({"transition": "opacity 0.5s", "opacity": "1"});
						}, 1000);
						setTimeout(() => {
							$("header").css("transition", "opacity 0");
							showingContact = false;
						}, 1500);
						clearInterval(timer);
					}
				}, 6);
			}, 500);
		} else if(nowPageID == "pagelist") {
			navbackAnimationFromPagelist();
			let timer = setInterval(() => {
				if(navbackAnimePagelistComp) {
					$(".contact").show();
					$("header").show();
					contentCardPoditionControl();		
					$("header").css({"transition": "opacity 0.5s", "opacity": "1"});
					$("header").children("#backhome").show();
					$("header").children("#backhome").attr("onClick", "changePage('home', 'contact')");
					$("header").children("#menubar").css("margin-left", "0");
					$(".contact").children(".wrap").css("opacity", "1");
					setTimeout(() => {
						$("header").css("transition", "opacity 0");
					}, 500);
					navbackAnimePagelistComp = false;
					showingContact = false;
					clearInterval(timer);
				}
			}, 5);
		} else {
			let widthCount = width;
			let heightCount = height;
			let path;
			$("." + nowPageID).children(".wrap").css("opacity", "0");
			$("header").css({"transition": "opacity 0.5s", "opacity": "0"});
			setTimeout(() => {
				$("header").children("#backhome").show();
				$("header").children("#backhome").attr("onClick", "changePage('home', 'contact')");
				$("header").children("#menubar").css("margin-left", "0");
				$("." + nowPageID).hide();
				$("header").attr("transition", "opacity 0");
				changePageAnimation("contact");
			}, 500);
		}
		
		$(".groval-nav").find(".nav_home").attr("onClick", "changePage('home', 'contact')");
		$(".groval-nav").find(".nav_profile").attr("onClick", "changePage('profile', 'contact')");
		$(".groval-nav").find(".nav_content").attr("onClick", "changePage('content', 'contact')");
		$(".groval-nav").find(".nav_contact").attr("onClick", "");
		$(".groval-nav").find(".nav_publicity").attr("onClick", "changePage('publicity', 'contact')");
		$("header").children("#menubar").attr("onClick", "$('.groval-nav').slideToggle();");
	}
}

const showPublicity = nowPageID => {
		$(".groval-nav").find(".nav_home").attr("onClick", "changePage('home', 'pblicity')");
		$(".groval-nav").find(".nav_profile").attr("onClick", "changePage('profile', 'publicity')");
		$(".groval-nav").find(".nav_content").attr("onClick", "changePage('content', 'publicity')");
		$(".groval-nav").find(".nav_contact").attr("onClick", "changePage('contact', 'publicity')");
		$(".groval-nav").find(".nav_publicity").attr("onClick", "changePage('publicity', 'publicity')");
		$("header").children("#menubar").attr("onClick", "$('.groval-nav').slideToggle();");
}

const showPagelist = nowPageID => {
	if(!showingPagelist) {
		showingPagelist = true;
		let svg = $("#navback");
		let width = $(window).width();
		let height = $(window).height();
		if(nowPageID == "home") {
			let lastpath = "M0,0 L" + width + ",0 " + width + "," + height + " 0," + height + " T0 0";
			let path;
			let widthCount = width;
			$(".home").find("nav").slideUp();
			$(".home").find("#profile-icon").css("z-index", "1");
			homeSnslinksAnime = true;
			homeSnslinksAnimation();
			setTimeout(() => {
				let timer = setInterval(() => {
					if(widthCount > 0) {
						widthCount -= width * 0.01;
						path = path = "M" + (widthCount * 0.9) + ",0 L" + width + ",0 " + width + "," + height + " " + (widthCount * 0.9) + "," + height + " Q" + widthCount + " " + (height / 2 * 2 - height / 20) + " " + widthCount + " " + (height / 2) + " T" + (widthCount * 0.9) + " 0";
						svg.children("path").attr("d", path);
					} else {
						svg.children("path").attr("d", lastpath);
						hidePage();
						$("header").hide();
						$(".pagelist").show();
						setTimeout(() => {
							$(".pagelist").children(".wrap").css("opacity", "1");
						}, 500);
						setTimeout(() => {
							$(".pagelist").find("nav").slideToggle();
							showingPagelist = false;
						}, 1000);
						clearInterval(timer);
					}
				}, 6);
			}, 500);
		} else if(nowPageID == "profile") {
			let widthCount = width;
			let heightCount = height;
			let path;
			$(".profile").children(".wrap").css("opacity", "0");
			$("header").css({"transition": "opacity 0.5s", "opacity": "0"});
			setTimeout(() => {
				$("header").children("#backhome").hide();
				$("header").children("#menubar").css("margin-left", "auto");
				$(".profile").hide();
				$("header").attr("transition", "opacity 0");
				navbackAnimationToPagelist();
			}, 500);
		} else if(nowPageID == "content") {
			let widthCount = width;
			let heightCount = height;
			let path;
			$(".content").children(".wrap").css("opacity", "0");
			$("header").css({"transition": "opacity 0.5s", "opacity": "0"});
			setTimeout(() => {
				$("header").children("#backhome").hide();
				$("header").children("#menubar").css("margin-left", "auto");
				$(".content").hide();
				$("header").attr("transition", "opacity 0");
				navbackAnimationToPagelist();
			}, 500);
		}  else if(nowPageID == "contact") {
			let widthCount = width;
			let heightCount = height;
			let path;
			$(".contact").children(".wrap").css("opacity", "0");
			$("header").css({"transition": "opacity 0.5s", "opacity": "0"});
			setTimeout(() => {
				$("header").children("#backhome").hide();
				$("header").children("#menubar").css("margin-left", "auto");
				$(".contact").hide();
				$("header").attr("transition", "opacity 0");
				navbackAnimationToPagelist();
			}, 500);
		}
	}
}

const hidePage = () => {
	let home = $(".home");
	let profile = $(".profile");
	let content = $(".content");
	let contact = $(".contact");
	let publicity = $(".publicity");
	let pagelist = $(".pagelist");
	home.hide();
	profile.hide();
	content.hide();
	contact.hide();
	publicity.hide();
	pagelist.hide();
}


const contentCardPoditionControl = () => {
	//コンテンツスタイル
	let width = $(window).width();
	if(width >= 1025) {
		let eles = $(".content").find(".container").children();
		for(let i = 0; i < eles.length; i++) {
			let textheight = eles.eq(i).find(".textarea").height();
			let imgheight = eles.eq(i).find(".content-image").height();
			let cardheight = textheight + imgheight + 63;
			eles.eq(i).height(cardheight);
			if(i > 1) {
				if(i % 2 == 0) {
					//左のカード
					let height1 = eles.eq(i - 2).height();
					let height2 = eles.eq(i - 1).height();
					let max = Math.max(height1, height2);
					if(i < 4) {
						let margins = -(max - height1);
						eles.eq(i).css({"top": "", "margin-top": margins + 40});
					} else {
						let top1 = eles.eq(i - 2).offset().top;
						let top2 = top1 + height1 + 40;
						eles.eq(i).offset({top: top2});
					}
				} else {
					//右のカード
					let height1 = eles.eq(i - 3).height();
					let height2 = eles.eq(i - 2).height();
					let max = Math.max(height1, height2);
					if(i < 4) {
						let margins = -(max - height2);
						eles.eq(i).css({"top": "", "margin-top": margins + 40});
					} else {
						let top1 = eles.eq(i - 2).offset().top;
						let top2 = top1 + height2 + 40;
						eles.eq(i).offset({top: top2});
					}
				}
			}
		}
	} else {
		let eles = $(".content").find(".container").children();
		for(let i = 0; i < eles.length; i++) {
			if(i % 2 != 0) {
				eles.eq(i).removeClass("content-right");
			}
			eles.eq(i).attr("style", "");
		}
	}
}

const homeSnslinksAnimation = () => {
	const ele = $(".home").find(".sns-links");
	let width = $(window).width();
	
	if(!homeSnslinksAnime && !nowHomeSnslinksAnime) {
		nowHomeSnslinksAnime = true;
		homeSnslinksAnime = true;
		ele.css("z-index", "3");
		ele.css("transition", "top 0.5s, right 0.5s");
		if(width >= 1025) {
			let homeContentWidth = $(".home").children(".home-content").width();
			ele.css({"top": "-70px", "right": (homeContentWidth * 0.3 + 40) + "px"});
		} else if(width < 1025 && width > 599) {
			ele.css({"top": (width * 0.2 - 60) + "px", "right": (width * 0.4 + 20) + "px"});
		} else if(width <= 599) {
			ele.css({"top": (width * 0.4 - 60) + "px", "right": (width * 0.4) + "px"});
		}
		setTimeout(() => {
			const gplus = ele.children("#googleplus");
			const twitter = ele.children("#twitter");
			const facebook = ele.children("#facebook");
			let count = 0;
			ele.css("transition", "");
			let timer = setInterval(() => {
				count++;
				if(count == 1) {
					gplus.css({"transition": "opacity 0.3s", "opacity": "1"});
					setTimeout(() => {
						gplus.css("transtion", "");
					}, 300);
				} else if(count == 2) {
					twitter.css({"transition": "opacity 0.3s", "opacity": "1"});
					setTimeout(() => {
						twitter.css("transition", "");
					}, 300);
				} else if(count == 3) {
					facebook.css({"transition": "opacity 0.3s", "opacity": "1"});
					setTimeout(() => {
						facebook.css("transition", "");
					}, 300);
					homeSnslinksAnime2 = true;
					nowHomeSnslinksAnime = false;
					clearInterval(timer);
				}
			}, 300);
		}, 500);
	} else if(!nowHomeSnslinksAnime){
		nowHomeSnslinksAnime = false;
		homeSnslinksAnime = false;
		ele.css("z-index", "0");
		const gplus = ele.children("#googleplus");
		const twitter = ele.children("#twitter");
		const facebook = ele.children("#facebook");
		let count = 0;
		if(homeSnslinksAnime2) {
			let timer = setInterval(() => {
				count++;
				if(count == 1) {
					facebook.css({"transition": "opacity 0.3s", "opacity": "0"});
					setTimeout(() => {
						facebook.css("transition", "");
					}, 300);
				} else if(count == 2) {
					twitter.css({"transition": "opacity 0.3s", "opacity": "0"});
					setTimeout(() => {
						twitter.css("transition", "");
					}, 300);
				} else if(count == 3) {
					gplus.css({"transition": "opacity 0.3s", "opacity": "0"});
					setTimeout(() => {
						gplus.css("transition", "");
					}, 300);
					homeSnslinksAnimation2 = false;
					clearInterval(timer);
				}
			}, 300);
			setTimeout(() => {
				ele.css("transition", "top 0.5s, right 0.5s");
				if(width >= 1025) {
					let homeContentWidth = $(".home").children(".home-content").width();
					ele.css({"top": "70px", "right": (homeContentWidth * 0.5 + 30) + "px"});
				} else if(width < 1025 && width > 599) {
					ele.css({"top": (width * 0.2 + 55) + "px", "right": (width * 0.5 + 25) + "px"});
				} else if(width <= 599) {
					ele.css({"top": (width * 0.4 + 40) + "px", "right": (width * 0.5 + 20) + "px"});
				}
				setTimeout(() => {
					ele.css("transition", "");
					nowHomeSnslinksAnime = false;
				}, 500);
			}, 1200);
		} else {
			ele.css("transition", "top 0.5s, right 0.5s");
			if(width >= 1025) {
				let homeContentWidth = $(".home").children(".home-content").width();
				ele.css({"top": "70px", "right": (homeContentWidth * 0.5 + 30) + "px"});
			} else if(width < 1025 && width > 599) {
				ele.css({"top": (width * 0.2 + 55) + "px", "right": (width * 0.5 + 25) + "px"});
			} else if(width <= 599) {
				ele.css({"top": (width * 0.4 + 40) + "px", "right": (width * 0.5 + 20) + "px"});
			}
			setTimeout(() => {
				ele.css("transition", "");
				nowHomeSnslinksAnime = false;
			}, 500);
		}
	}
}

const homeSnslinksAnimation2 = () => {
	const ele = $(".home").find(".sns-links");
	
	if(homeSnslinksAnime2 && !nowHomeSnslinksAnime) {
		nowHomeSnslinksAnime = true;
		homeSnslinksAnime2 = false;
		const gplus = ele.children("#googleplus");
		const twitter = ele.children("#twitter");
		const facebook = ele.children("#facebook");
		let count = 0;
		let timer = setInterval(() => {
			count++;
			if(count == 1) {
				facebook.css({"transition": "opacity 0.3s", "opacity": "0"});
				setTimeout(() => {
					facebook.css("transition", "");
				}, 300);
			} else if(count == 2) {
				twitter.css({"transition": "opacity 0.3s", "opacity": "0"});
				setTimeout(() => {
					twitter.css("transition", "");
				}, 300);
			} else if(count == 3) {
				gplus.css({"transition": "opacity 0.3s", "opacity": "0"});
				setTimeout(() => {
					gplus.css("transition", "");
				}, 300);
				nowHomeSnslinksAnime = false;
				clearInterval(timer);
			}
		}, 300);
	} else if(!nowHomeSnslinksAnime) {
		nowHomeSnslinksAnime = true;
		const gplus = ele.children("#googleplus");
		const twitter = ele.children("#twitter");
		const facebook = ele.children("#facebook");
		let count = 0;
		let timer = setInterval(() => {
			count++;
			if(count == 1) {
				gplus.css({"transition": "opacity 0.3s", "opacity": "1"});
				setTimeout(() => {
					gplus.css("transtion", "");
				}, 300);
			} else if(count == 2) {
				twitter.css({"transition": "opacity 0.3s", "opacity": "1"});
				setTimeout(() => {
					twitter.css("transition", "");
				}, 300);
			} else if(count == 3) {
				facebook.css({"transition": "opacity 0.3s", "opacity": "1"});
				setTimeout(() => {
					facebook.css("transition", "");
				}, 300);
				nowHomeSnslinksAnime = false;
				homeSnslinksAnime2 = true;
				clearInterval(timer);
			}
		}, 300);
	}
}

const isHomeSnslinksAnime = () => {return homeSnslinksAnime};

 
//ready
$(() => {
	let width = $(window).width();
	
	//ページの表示・非表示
	$(".home").show();
	$("header").children("#menubar").css("margin-left", "auto");
	
	//トップメッセージ
	let topmessage = $("#topmessage");
	let shadowstate = false;
	topmessage.css("transition", "text-shadow 1.5s");
	setInterval(() => {
		if(!shadowstate) {
			topmessage.css("text-shadow", "2px 2px 5px white");
			shadowstate = true;
		} else {
			topmessage.css("text-shadow", "none");
			shadowstate = false;
		}
	}, 1500);
	
	if(width >= 1025) {
		$("header").children("#menubar").attr("onClick", "changePage('pagelist', 'home');");
			console.log("b");
	} else {
		$("header").children("#menubar").attr("onClick", "$('.groval-nav').slideToggle();");
	}
});


//resize
$(window).on("resize", () => {
	let width = $(window).width();
	let height = $(window).height();
	
	if($(".home").attr("style") != "display: none;") {
		let path;
		let svg = $("#navback");
		svg.attr("viewBox", "0 0 " + width + " " + height);
		if(width < 1025) {
			$(".home").find("nav").hide();
			svg.children("path").attr("d", "");
		} else if(width >= 932) {
			$(".home").find("nav").show();
			path = "M" + ((width - width * 0.195) * 0.9) + ",0 L" + width + ",0 " + width + "," + height + " " + ((width - width * 0.195) * 0.9) + "," + height + " Q" + ((width - width * 0.195)) + " " + (height / 2 * 2 - height / 20) + " " + ((width - width * 0.195)) + " " + (height / 2) + " T" + ((width - width * 0.195) * 0.9) + " 0";
			svg.children("path").attr("d", path);
		}
	} else if($(".home").attr("style") == "display: none;") {
		let svg = $("#navback");
		let path = "M0,0 L" + width + ",0 " + width + "," + height + " 0," + height + " T0 0";
		svg.attr("viewBox", "0 0 " + width + " " + height);
		svg.children("path").attr("d", path);
	}
	
	if($(".content").attr("style") != "display: none") {
		contentCardPoditionControl();
	}
	
	//ホームのメニューバーの処理
	if($(".home").attr("style") != "display: none;") {
		if(width >= 1025) {
			$("header").children("#menubar").attr("onClick", "changePage('pagelist', 'home');");
		} else {
			$("header").children("#menubar").attr("onClick", "$('.groval-nav').slideToggle();");
		}
	}
});