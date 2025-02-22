document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("podcast-video");
    const playPauseButton = document.getElementById("playPause");

    playPauseButton.addEventListener("click", function() {
        if (video.paused) {
            video.play();
            playPauseButton.textContent = "Pause";
        } else {
            video.pause();
            playPauseButton.textContent = "PLAY";
        }
    });
});
