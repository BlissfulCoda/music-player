(function(){
    //UI Variables
    const image = document.querySelector('img');
    const title = document.querySelector('#title');
    const artist = document.querySelector('#artist')
    const music = document.querySelector('audio')
    const prevBtn = document.querySelector('#prev')
    const playBtn = document.querySelector('#play')
    const nextBtn = document.querySelector('#next')

    //load All Event Listeners
    loadAllEventListeners();

    function loadAllEventListeners(){
        //Play or Pause Listener
        playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));
    }

    //Music
    const songs = [
        {
            name: 'jacinto-1',
            displayName: 'Fuck-Up Fixer',
            artist: 'Sarah BD',
        },
        {
            name: 'jacinto-12',
            displayName: 'High Tides',
            artist: 'Ro\'mie BZ',
        },
        {
            name: 'jacinto-3',
            displayName: 'Seventh Nation',
            artist: 'Black Zeus',
        },
        {
            name: 'metric-1',
            displayName: 'Heaven\'s Grace',
            artist: 'Brody Woof Woof',
        }
    ]

    //check if playing
    let isPlaying = false;
    //play
    function playSong(){
        isPlaying = true;
        changePauseOrPlay()
        checkSon()
        music.play();

    }

    //pause
    function pauseSong(){
        isPlaying = false;
        changePauseOrPlay()
        checkSon()
        music.pause();
    }

    //Check if pause is true of false and change title attribute
    function checkSon(){
       return isPlaying ? playBtn.setAttribute('title', 'Pause') : playBtn.setAttribute('title', 'Play') ;
    }

    //replace Pause or play
    function changePauseOrPlay(){
    return isPlaying ? playBtn.classList.replace('fa-play', 'fa-pause') : playBtn.classList.replace('fa-pause', 'fa-play');
    }

    //load Song
    function loadSong(song){
        title.textContent = song.displayName;
        artist.textContent = song.artist;
        music.src = `music/${song.name}.mp3`;
        image.src = `img/${song.name}.jpg`;
    }

    loadSong(songs[3])
    //
})();