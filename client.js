$(document).ready(function() {
	var socket = io.connect('http://127.0.0.1:8088');
	socket.on('text', function(data) {
		alert(data);
	});
});