const video = document.querySelector('.viewer');
const playButton = document.querySelector('.toggle');
const volumeControl = document.querySelector('.volume');
const speedControl = document.querySelector('.playbackSpeed');
const rewindButton = document.querySelector('.rewind');
const fastForwardButton = document.querySelector('.fastForward');
const progressBar = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

// Play/Pause Toggle
function togglePlay() {
  if (video.paused) {
    video.play();
    playButton.textContent = '❚ ❚';
  } else {
    video.pause();
    playButton.textContent = '►';
  }
}

// Update Progress Bar
function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.value = percent;
}

// Seek Video
function setProgress() {
  const time = (progressBar.value / 100) * video.duration;
  video.currentTime = time;
}

// Volume Control
function handleVolume() {
  video.volume = volumeControl.value;
}

// Playback Speed Control
function handleSpeed() {
  video.playbackRate = speedControl.value;
}

// Rewind and Fast Forward
function rewind() {
  video.currentTime -= 10;
}

function fastForward() {
  video.currentTime += 25;
}

// Event Listeners
video.addEventListener('click', togglePlay);
playButton.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
progressBar.addEventListener('input', setProgress);
volumeControl.addEventListener('input', handleVolume);
speedControl.addEventListener('input', handleSpeed);
rewindButton.addEventListener('click', rewind);
fastForwardButton.addEventListener('click', fastForward);
