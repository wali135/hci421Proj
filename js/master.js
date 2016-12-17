function popitup(url) {
	newwindow=window.open(url,'name','height=200,width=150');
	if (window.focus) {newwindow.focus()}
	return false;
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function framechange(url){
	document.getElementById("mainframe").src=url;
	document.getElementById('mainframe').contentWindow.location.reload(true);
}

$(function(){
    $('.selectpicker').selectpicker();
});