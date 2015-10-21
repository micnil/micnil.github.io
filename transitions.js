function load(file) {

	//(e || window.event).preventDefault();
	var con = document.getElementById('content')
	,   xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function (e) {
		if (xhr.readyState == 4 && xhr.status == 200) {
			con.innerHTML = xhr.responseText;
		}
	}
	xhr.open("GET", file + '.html', true);
	xhr.setRequestHeader('Content-type', 'text/html');
	xhr.send();
};

/*function onBoxClickEvent(e){
	var more=e.target;
	if(more.hasChildNodes()){

		var nodes = more.childNodes;
		for (var i = 0; i < nodes.length; i++) {
			if(nodes.item(i).className == "more"){
				more=nodes.item(i);
				break;
			}
		}
	}
	if(more.parentNode.className=="more"){
		more = more.parentNode;
	}else{
		while (more.className != "more")
			more = more.nextSibling;
	}



	if(more.style.display=="inline"){
		more.style.display = "none";
	}
	else{
		more.style.display = "inline";
	}
};*/


function onBoxClickEvent(e){
	$(e.currentTarget).children('.more').toggleClass('hidden');
};

