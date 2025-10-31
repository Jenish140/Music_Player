// Get DOM Elements
const playerContainer = document.querySelector('.player-container');
const audio = document.getElementById('audio');
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');
const cover = document.getElementById('cover');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const volumeSlider = document.getElementById('volume-slider');

const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Song titles, artists, and file names
// Add your songs here following this format
const songs = [
    {
        title: 'Hum Tere Pyar Mein',
        artist: 'Lata Mangeshkar',
        src: 'music/song1.mp3',
        cover: 'images/cover1.jpg'
    },
    {
        title: 'Chand Si Mehbooba Ho Meri',
        artist: 'Mukesh',
        src: 'music/song2.mp3',
        cover: 'images/cover2.jpeg'
    },
    {
        title: 'Itna Na Mujhse Tu Pyar Badha',
        artist: 'Talat Mahmood',
        src: 'music/song3.mp3',
        cover: 'images/cover3.jpeg'
    }
];

// Keep track of the current song
let songIndex = 0;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// --- FUNCTIONS ---

// Update song details
function loadSong(song) {
    title.innerText = song.title;
    artist.innerText = song.artist;
    audio.src = song.src;
    cover.src = song.cover;
}

// Play song
function playSong() {
    playerContainer.classList.add('playing');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

// Pause song
function pauseSong() {
    playerContainer.classList.remove('playing');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
}

// Previous song
function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1; // Wrap to last song
    }
    loadSong(songs[songIndex]);
    playSong();
}

// Next song
function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0; // Wrap to first song
    }
    loadSong(songs[songIndex]);
    playSong();
}

// Update progress bar
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
}

// Set progress bar on click (seek)
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    
    if (duration) {
        audio.currentTime = (clickX / width) * duration;
    }
}

// Set volume
function setVolume(e) {
    audio.volume = e.target.value;
}


// --- EVENT LISTENERS ---

// Play/Pause button
playBtn.addEventListener('click', () => {
    const isPlaying = playerContainer.classList.contains('playing');
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar to seek
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);

// Volume control
volumeSlider.addEventListener('input', setVolume);