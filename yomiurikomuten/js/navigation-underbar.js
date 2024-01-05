//Navigation Underbar Animation
//アニメーションインターバル（action / ms）
const interval = 6;
//アニメーションスピード（px / action）
const speed = 10;

//ページID
const home = "home";
const newConst = "new-construction";
const reform = "reform";
const constExample = "construction-example";
const question = "question";
const staffIntro = "staff-introduction";

//ナビゲーションID
const navHome = "nav-home";
const navNewConst = "nav-new-construction";
const navReform = "nav-reform";
const navConstExample = "nav-construction-example";
const navQuestion = "nav-question";
const navStaffIntro = "nav-staff-introduction";

//今いるページ
let nowPage = null;

//フラグ
let meHome;
let meNewConst;
let meReform;
let meConstExample;
let meQuestion ;
let meStaffIntro;

//今いるページを取得
$(function() {
	nowPage = $("body").attr("class");
	meHome = [false, false];
	meNewConst = [false, false];
	meReform = [false, false];
	meConstExample = [false, false];
	meQuestion = [false, false];
	meStaffIntro = [false, false];
});

//ホーム
$("#nav-home").on({
	"mouseenter": function() {
		if(nowPage != home) enterAnimation(this);
	},
	"mouseleave": function() {
		if(nowPage != home) leaveAnimation(this);
	}
});

//新築について
$("#nav-new-construction").on({
	"mouseenter": function() {
		if(nowPage != newConst) enterAnimation(this);
	},
	"mouseleave": function() {
		if(nowPage != newConst) leaveAnimation(this);
	}
});

//リフォームについて
$("#nav-reform").on({
	"mouseenter": function() {
		if(nowPage != reform) enterAnimation(this);
	},
	"mouseleave": function() {
		if(nowPage != reform) leaveAnimation(this);
	}
});

//施工事例
$("#nav-construction-example").on({
	"mouseenter": function() {
		if(nowPage != constExample) enterAnimation(this);
	},
	"mouseleave": function() {
		if(nowPage != constExample) leaveAnimation(this);
	}
});

//よくある質問FAQ
$("#nav-question").on({
	"mouseenter": function() {
		if(nowPage != question) enterAnimation(this);
	},
	"mouseleave": function() {
		if(nowPage != question) leaveAnimation(this);
	}
});

//スタッフ紹介
$("#nav-staff-introduction").on({
	"mouseenter": function() {
		if(nowPage != staffIntro) enterAnimation(this);
	},
	"mouseleave": function() {
		if(nowPage != staffIntro) leaveAnimation(this);
	}
});


//マウスエンターアニメーション
function enterAnimation(nav) {
	//ナビゲーションのID取得
	let navId = nav.id;
	//アンダーバーのID取得
	let barId = navId + "-under";
	//ナビゲーションのオブジェクト
	let navObj = $("#" + navId);
	//アンダーバーのオブジェクト
	let barObj = $("#" + barId);
	
	//マウスエンターフラグを立ててマウスリーブフラグを切る
	changeFlagEnter(navId);
	
	//アニメーション開始
	if(isEnter(navId) && !isLeave(navId)) {
		let timer = setInterval(function() {
			//ナビゲーションの横幅
			let navWidth = navObj.width();
			//アンダーバーの横幅
			let barWidth = barObj.width();

			//アニメーション終了
			if(barWidth + speed >= navWidth) {
				//横幅を合わせる
				barObj.width(navWidth);
				//マウスエンターフラグを切る
				flagEnterFalse(navId);
			}
			if(!isEnter(navId)) {
				clearInterval(timer);
				return;
			}
			
			//アンダーバーの横幅拡張
			barObj.width(barWidth + speed);
		}, interval);
	}
}

//マウスリーブアニメーション
function leaveAnimation(nav) {
	//ナビゲーションのID取得
	let navId = nav.id;
	//アンダーバーのID取得
	let barId = navId + "-under";
	//アンダーバーのオブジェクト
	let barObj = $("#" + barId);
	
	//マウスエンターフラグを切ってマウスリーブフラグを立てる
	changeFlagLeave(navId);
	
	//アニメーション開始
	if(!isEnter(navId) && isLeave(navId)) {
		let timer = setInterval(function() {
			//アンダーバーの横幅
			let barWidth = barObj.width();

			//アニメーション終了
			if(barWidth - speed <= 0) {
				//横幅を0にする
				barObj.width(0);
				//マウスリーブフラグを切る
				flagLeaveFalse(navId);
			}
			if(!isLeave(navId)) {
				clearInterval(timer);
				return;
			}
			
			//アンダーバーの横幅縮小
			barObj.width(barWidth - speed);
		}, interval);
	}
}

//フラグ切り替え
function changeFlagEnter(navId) {
	flagEnterTrue(navId);
	flagLeaveFalse(navId);
}

function changeFlagLeave(navId) {
	flagEnterFalse(navId);
	flagLeaveTrue(navId);
}

function flagEnterTrue(navId) {
	switch(navId) {
		case navHome: meHome[0] = true; break;
		case navNewConst: meNewConst[0] = true; break;
		case navReform: meReform[0] = true; break;
		case navConstExample: meConstExample[0] = true; break;
		case navQuestion: meQuestion[0] = true; break;
		case navStaffIntro: meStaffIntro[0] = true; break;
	}
}

function flagEnterFalse(navId) {
	switch(navId) {
		case navHome: meHome[0] = false; break;
		case navNewConst: meNewConst[0] = false; break;
		case navReform: meReform[0] = false; break;
		case navConstExample: meConstExample[0] = false; break;
		case navQuestion: meQuestion[0] = false; break;
		case navStaffIntro: meStaffIntro[0] = false; break;
	}
}

function flagLeaveTrue(navId) {
	switch(navId) {
		case navHome: meHome[1] = true; break;
		case navNewConst: meNewConst[1] = true; break;
		case navReform: meReform[1] = true; break;
		case navConstExample: meConstExample[1] = true; break;
		case navQuestion: meQuestion[1] = true; break;
		case navStaffIntro: meStaffIntro[1] = true; break;
	}
}

function flagLeaveFalse(navId) {
	switch(navId) {
		case navHome: meHome[1] = false; break;
		case navNewConst: meNewConst[1] = false; break;
		case navReform: meReform[1] = false; break;
		case navConstExample: meConstExample[1] = false; break;
		case navQuestion: meQuestion[1] = false; break;
		case navStaffIntro: meStaffIntro[1] = false; break;
	}
}

//フラグ取得
function isEnter(navId) {
	if(navId == navHome) {
		return meHome[0];
	} else if(navId == navNewConst) {
		return meNewConst[0];
	} else if(navId == navReform) {
		return meReform[0];
	} else if(navId == navConstExample) {
		return meConstExample[0];
	} else if(navId == navQuestion) {
		return meQuestion[0];
	} else if(navId == navStaffIntro) {
		return meStaffIntro[0];
	}
}

function isLeave(navId) {
	if(navId == navHome) {
		return meHome[1];
	} else if(navId == navNewConst) {
		return meNewConst[1];
	} else if(navId == navReform) {
		return meReform[1];
	} else if(navId == navConstExample) {
		return meConstExample[1];
	} else if(navId == navQuestion) {
		return meQuestion[1];
	} else if(navId == navStaffIntro) {
		return meStaffIntro[1];
	}
}