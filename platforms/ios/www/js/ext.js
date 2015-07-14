document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	document.addEventListener("pause", onPause, false);
	document.addEventListener("resume", onResume, false);
	
	console.log('All added without problems.');
}

function onPause() {
	console.log('Application paused');
}

function onResume() {
	console.log('Application resumed');
}