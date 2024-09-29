const videoPlayer = document.getElementById('videoPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const muteBtn = document.getElementById('muteBtn');
const volumeSlider = document.getElementById('volumeSlider');
const videoInput = document.getElementById('videoInput');

// Play/Pause toggle
playPauseBtn.addEventListener('click', function() {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        videoPlayer.pause();
        playPauseBtn.textContent = 'Play';
    }
});

// Mute/Unmute toggle
muteBtn.addEventListener('click', function() {
    if (videoPlayer.muted) {
        videoPlayer.muted = false;
        muteBtn.textContent = 'Mute';
    } else {
        videoPlayer.muted = true;
        muteBtn.textContent = 'Unmute';
    }
});

// Volume control
volumeSlider.addEventListener('input', function() {
    videoPlayer.volume = volumeSlider.value;
});

// Load video from local file
videoInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const fileURL = URL.createObjectURL(file);
        videoPlayer.src = fileURL;
        videoPlayer.load();
        playPauseBtn.textContent = 'Play';
    }
});
