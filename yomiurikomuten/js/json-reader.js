/* JavScript Library [Json Reader] *
 *  © Sudo Hiroto (hiro0209) 2019  */

const Json = function(jsonUrl) {
	let obj = null;
	let nowDir = "";
	let findedData = null;
	let prepared = false;
	
	$.ajax({
		url: jsonUrl,
		dataType: "json"
	}).done(function(data) {
		checkExistId(data);
		obj = data;
		prepared = true;
		try {
			JsonReaded();
		} catch(e) {}
	}).fail(function(jqXHR, textStatus, errorThrown ) {
		console.log(jqXHR.status);
		console.log(textStatus);
		console.log(errorThrown);
	});
	
	function checkExistId(data) {
		if(data instanceof Array) {
			for(let i = 0; i < data.length; i++) {
				if(!(data[i] instanceof Array) && 
				  (data[i] instanceof Object)) {
					checkExistId(data[i]);
				}
			}
		} else if(data instanceof Object) {
			let hasId = false;
			let keys = Object.keys(data);
			for(let i = 0; i < keys.length; i++) {
				if(keys[i] != "id" && i + 1 == keys.length && !hasId) {
					console.log("Error: Object has not id parameter (jequery.json-reader)");
					return;
				} else if(keys[i] == "id") {
					hasId = true;
				} else if(data[keys[i]] instanceof Array) {
					checkExistId(data[keys[i]]);
				}
			}
		}
	}
	
	function isAccessable() {
		if(obj == null) {
			console.log("Error: Faild access to JSON object (jquery.json-reader)");
			return false;
		} else {
			return true;
		}
	}
	
	function isPrepared() {
		if(prepared) {
			return true;
		} else {
			console.log("Error: json reading still not completed (jquery.json-reader)");
			return false;
		}
	}
	
	function findBlockByData(id, data) {
		if(data instanceof Array) {
			for(let i = 0; i < data.length; i++) {
				if(data[i] instanceof Object) {
					findBlockByData(id, data[i]);
				}
			}
		} else if(data instanceof Object) {
			if(data["id"] == id) {
				findedData = data;
			} else {
				let keys = Object.keys(data);
				for(let i = 0; i < keys.length; i++) {
					if(data[keys[i]] instanceof Array) {
						findBlockByData(id, data[keys[i]]);
					}
				}
			}
		}
	}
	
	function findData(pathArray, data) {
		let paths = pathArray;
		if(paths[0] == "") {
			paths.shift();
		}
		
		if(paths.length == 1) {
			if(data instanceof Array) {
				for(let i = 0; i < data.length; i++) {
					if(data[i]["id"] == paths[0]) {
						findedData = data[i];
					}
				}
			} else if(data instanceof Object) {
				findedData = data[paths[0]];
			}
		} else {
			if(data instanceof Array) {
				for(let i = 0; i < data.length; i++) {
					if(data[i]["id"] == paths[0]) {
						paths.shift();
						findData(paths, data[i]);
					}
				}
			} else if(data instanceof Object) {
				let findArray = data[paths[0]];
				paths.shift();
				findData(paths, findArray);
			}
		}
	}
	
	return {
		changeDir: function(path) {
			if(isAccessable() && isPrepared()) {
				if(path.indexOf("/") == 0) {
					nowDir += path;
				} else {
					nowDir += ("/" + path);
				}
			}
		},
		
		get: function(path) {
			if(isAccessable() && isPrepared()) {
				let dataPath = "";
				if(path.indexOf("/") == 0) {
					dataPath = nowDir + path;
				} else {
					dataPath = nowDir + "/" + path;
				}
				
				let paths = dataPath.split("/");
				findData(paths, obj);
				return findedData;
			}
		},
		
		findBlock: function(id) {
			if(isAccessable() && isPrepared()) {
				findBlockByData(id, obj);
				return findedData;
			}
		}
	}
}