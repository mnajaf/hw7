var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
video = document.querySelector("#player1");
video.autoplay = false;

video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {


video.play();

video.volume = document.querySelector('#slider').value / 100;


document.querySelector("#volume").innerHTML = (video.volume * 100) + '%';

});

document.querySelector("#pause").addEventListener("click", function() {

	
	video.pause();

});

document.querySelector("#slower").addEventListener("click", function() {
	
	video.playbackRate -= 0.2;
	console.log("New Speed is: " + video.playbackRate);

});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.2;
	console.log("New Speed is: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	}
	console.log("Video Location: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		document.querySelector('#mute').innerHTML = "Mute";
	}
	else {
		video.muted = true;
		document.querySelector('#mute').innerHTML = "Unmute";
		
	}
});

document.querySelector("#slider").addEventListener("change", function() {

	video.volume = document.querySelector('#slider').value / 100;

	document.querySelector("#volume").innerHTML = (video.volume * 100) + '%';
	console.log("New Video Volume: " + video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
});
