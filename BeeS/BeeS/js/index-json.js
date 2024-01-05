$(function() {
	$.ajax({
		url: "json/update.json",
		dataType: "json"
	}).done(function(data) {
		for(let i = 0; i < data.length && i < 8; i++) {
			$("#update_list").append("<li id='update" + data[i].id + "'><span class='date'>" + data[i].date + "</span><br/><span class='data'>&nbsp;&nbsp;&nbsp;" + data[i].name + "</span></li>\n");
		}
	});
});