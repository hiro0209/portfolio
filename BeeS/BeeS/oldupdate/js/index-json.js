$(function() {
	$.ajax({
		url: "../json/update.json",
		dataType: "json"
	}).done(function(data) {
		for(let i = 0; i < data.length; i++) {
			$(".textgroup-type2").append("<p class='text' id='update" + data[i].id + "'><span>" + data[i].date + "</span>" + data[i].name + "</p>")
		}
	});
});