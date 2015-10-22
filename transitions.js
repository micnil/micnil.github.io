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

function onBoxClickEvent(e){
	$(e.currentTarget).children('.more').toggleClass('hidden');
};

