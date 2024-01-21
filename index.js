let progress = document.getElementById("progress")
let song = document.getElementById("song")
let controlIcon = document.getElementById("controlIcon")

// this anonymous function will load the song's metadata and use it 
song.onloadedmetadata = () => {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

// this function will be called when you click on the play/pause buttons 
playPause = () => {
    // here we check if the div contains the play icon, if yes, play the song and change the icon to pause
    if (controlIcon.classList.contains("fa-play")) {
        song.play();
        controlIcon.classList.remove("fa-play");
        controlIcon.classList.add("fa-pause");

    
        // I called this in this condition in order to prevent the song from starting onload
        if (song.play()) {
            setInterval(() => {
                progress.value = song.currentTime;
            }, 500)
        }
    // here we check if the div contains the pause icon, if yes, pause the song and change the icon to play
    } else if (controlIcon.classList.contains("fa-pause")) {
        song.pause();
        controlIcon.classList.add("fa-play");
        controlIcon.classList.remove("fa-pause");
    }
}

// this will enable us to navigate to the part we want and play the song instantly 
progress.onchange = () => {
    song.play();
    song.currentTime = progress.value;
    controlIcon.classList.remove("fa-play");
    controlIcon.classList.add("fa-pause");
}
