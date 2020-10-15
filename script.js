(function() {
  //UI Variables
  const image = document.querySelector('img');
  const title = document.querySelector('#title');
  const artist = document.querySelector('#artist');
  const music = document.querySelector('audio');
  const progressContainer = document.getElementById('progress-container');
  const progress = document.querySelector('#progress');
  const prevBtn = document.querySelector('#prev');
  const playBtn = document.querySelector('#play');
  const nextBtn = document.querySelector('#next');

  //load All Event Listeners
  loadAllEventListeners();

  function loadAllEventListeners() {
    //Play or Pause Listener
    playBtn.addEventListener('click', () =>
      isPlaying ? pauseSong() : playSong()
    );
    //prev Song
    prevBtn.addEventListener('click', prevSong);
    //next Song
    nextBtn.addEventListener('click', nextSong);
    //timeupdate
    music.addEventListener('timeupdate', updateProgressBar);
  }

  //check if playing
  let isPlaying = false;

  //Music
  const songs = [
    {
      name: 'jacinto-1',
      displayName: 'Fuck-Up Fixer',
      artist: 'Sarah BD'
    },
    {
      name: 'jacinto-2',
      displayName: 'High Tides',
      artist: "Ro'mie BZ"
    },
    {
      name: 'jacinto-3',
      displayName: 'Seventh Nation',
      artist: 'Black Zeus'
    },
    {
      name: 'metric-1',
      displayName: "Heaven's Grace",
      artist: 'Brody Woof Woof'
    }
  ];
  //play
  function playSong() {
    isPlaying = true;
    changePauseOrPlay();
    checkSon();
    music.play();
  }

  //pause
  function pauseSong() {
    isPlaying = false;
    changePauseOrPlay();
    checkSon();
    music.pause();
  }

  //Check if pause is true of false and change title attribute
  function checkSon() {
    return isPlaying
      ? playBtn.setAttribute('title', 'Pause')
      : playBtn.setAttribute('title', 'Play');
  }

  //replace Pause or play
  function changePauseOrPlay() {
    return isPlaying
      ? playBtn.classList.replace('fa-play', 'fa-pause')
      : playBtn.classList.replace('fa-pause', 'fa-play');
  }

  //load Song
  function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
  }
  //Current Song
  let songIndex = 0;

  loadSong(songs[songIndex]);

  //Prev Song
  function prevSong() {
    songIndex--;
    loopSongs();
    loadSong(songs[songIndex]);
    playSong();
  }

  //Next Song
  function nextSong() {
    songIndex++;
    loopSongs();
    loadSong(songs[songIndex]);
    playSong();
  }

  //check Song
  function loopSongs() {
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    } else if (songIndex < 0) {
      songIndex = songs.length - 1;
    }
  }

  //Update the Music Bar
  function updateProgressBar(e){
    if(isPlaying){
        const {duration, currentTime} = e.srcElement;
        console.log(duration, currentTime);
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`
    }
  }

  //
})();
