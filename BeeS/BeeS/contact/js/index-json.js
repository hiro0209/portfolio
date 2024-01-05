$(function() {
	$.ajax({
		url: "json/article.json",
		dataType: "json"
	}).done(function(data) {
		for(let i in data) {
			let sg = data[i];
			$("#contacts").append("<div class='textgroup' id='article" +sg.id + "'><h2 class='subtitle'>" + sg.title + "</h2></div>");
			for(let ii in sg.content) {
				let cg = sg.content[ii];
				if(cg.subtitle === false) {
					if(cg.link === false) {
						$("#article" + sg.id).append("<div class='subtextgroup' id='article" + sg.id + "-" + cg.id + "'><p class='text'><span class='textname'>" + cg.name + "</span>：" + cg.data + "</p></div>");
					} else {
						$("#article" + sg.id).append("<div class='subtextgroup' id='article" + sg.id + "-" + cg.id + "'><p class='text'><span class='textname'>" + cg.name + "</span>：<a href='" + cg.link + "'>" + cg.data + "</a></p></div>");
					}
				} else {
					if(cg.link === false) {
						$("#article" + sg.id).append("<div class='subtextgroup' id='article" + sg.id + "-" + cg.id + "'><h3 class='subsubtitle'>" + cg.subtitle + "</h3><p class='text'><span class='textname'>" + cg.name + "</span>：" + cg.data + "</p></div>");
					} else {
						$("#article" + sg.id).append("<div class='subtextgroup' id='article" + sg.id + "-" + cg.id + "'><h3 class='subsubtitle'>" + cg.subtitle + "　</h3><p class='text'><span class='textname'>" + cg.name + "</span>：<a href='" + cg.link + "'>" + cg.data + "</a></p></div>");
					}
				}
			}
		}
	});
});