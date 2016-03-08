window.setInterval("sendRequset('xxx.jsp')",1000);
var id;
function setAuto(){
	id =setInterval("document.frames('chat').document.body.scroolTop = document.frames('chat').document.body.scroolHeight",1000);
}
function clearAuto(){
	clearInterval(id);
}


function showChatMessage(){
	var message = $.ajax({});
	document.getElementById("chat").innerText = message;
}

function refreshMessage(){
    var timer = setInterval(showChatMessage,1000)
}


