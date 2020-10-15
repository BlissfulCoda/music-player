(function(){
    //UI Variables
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

})();