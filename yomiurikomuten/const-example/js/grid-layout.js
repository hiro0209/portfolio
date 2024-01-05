/* IE Support Grid Layout */

const userAgent = window.navigator.userAgent.toLowerCase();
let ie = false;

//IEの判別
if(userAgent.indexOf("msie") != -1 || userAgent.indexOf("trident") != -1) {
	ie = true;
}

$(function() {
	//IEだったら無理やりグリッドレイアウト
	if(ie) $(".building-image-list").addClass("grid");
});