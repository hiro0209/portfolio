// News Switcher

let buttons;
let now_news = $("#now-news");
let now_news_num = 0;

$(function() {
	//ボタンリスト取得
	buttons = $("#news-switcher").find("a");
});

//スイッチボタンを押したとき
$(".switch-button").click(function() {
	//スイッチボタンの背景色入れ替え
	now_news.removeAttr("id");
	$(this).attr("id", "now-news");
	now_news = $(this);
});

//左矢印ボタンを押したとき
$("#switcher-left").click(function() {
	if(now_news_num <= 0) {
		return;
	} else {
		//スイッチボタン背景色入れかえ
		now_news_num--;
		now_news.removeAttr("id");
		$(buttons[now_news_num]).attr("id", "now-news");
		now_news = $(buttons[now_news_num]);
	}
});

//右矢印ボタンを押したとき
$("#switcher-right").click(function() {
	if(now_news_num >= buttons.length - 1) {
		return;
	} else {
		//スイッチボタン背景色入れ替え
		now_news_num++;
		now_news.removeAttr("id");
		$(buttons[now_news_num]).attr("id", "now-news");
		now_news = $(buttons[now_news_num]);
	}
});