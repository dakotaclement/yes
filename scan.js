$(document).ready(function() {
	phonetics = JSON.parse('phonetics.JSON');
	var poem = document.getElementbyID("input");
	var scanned = document.getElementbyID("output");
	$('submit').click(function scan (){
		document.getElementbyID('output').value = document.getElementbyID('input').value;
	});
});