const video = document.querySelector('.viewer');
const playButton = document.querySelector('.toggle');
const volumeControl = document.querySelector('.volume');
const speedControl = document.querySelector('.playbackSpeed');
const rewindButton = document.querySelector('.rewind');
const fastForwardButton = document.querySelector('.fastForward');
const progressBar = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

// Toggle Play/Pause
function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}

// Update Play Button State
function updatePlayButton() {
  playButton.textContent = video.paused ? '►' : '❚ ❚';
}

// Update Progress Bar
function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.value = percent;
  progressFilled.style.width = `${percent}%`;
}

// Seek Video
function setProgress(e) {
  const newTime = (e.target.value / 100) * video.duration;
  video.currentTime = newTime;
}

// Volume Control
function handleVolume() {
  video.volume = volumeControl.value;
}

// Playback Speed Control
function handleSpeed() {
  video.playbackRate = speedControl.value;
}

// Rewind Video
function rewind() {
  video.currentTime = Math.max(0, video.currentTime - 10);
}

// Fast Forward Video
function fastForward() {
  video.currentTime = Math.min(video.duration, video.currentTime + 25);
}

// Event Listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);
video.addEventListener('timeupdate', updateProgress);

playButton.addEventListener('click', togglePlay);
progressBar.addEventListener('input', setProgress);
volumeControl.addEventListener('input', handleVolume);
speedControl.addEventListener('input', handleSpeed);
rewindButton.addEventListener('click', rewind);
fastForwardButton.addEventListener('click', fastForward);
