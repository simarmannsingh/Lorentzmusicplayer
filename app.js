let songs = ["Song1.mp3","Song2.mp3","Song3.mp3"];
    let poster = ["Poster1.jpg","Poster2.jpg","Poster3.jpg"];
    
    let songTitle = document.getElementById("songTitle");
    let fillBar = document.getElementById("fill");
    
    let song = new Audio();
    let currentSong = 0;

    window.onload = playSong;       
    function playSong(){        
        song.src = songs[currentSong];        
        songTitle.textContent = songs[currentSong];        
        song.play();
    }
    
    function playOrPauseSong(){        
        if(song.paused){
            song.play();
            $("#play img").attr("src","Pause.png");
        }
        else{
            song.pause();
            $("#play img").attr("src","Play.png");
        }
    }
    
    song.addEventListener('timeupdate',()=>{        
        let position = song.currentTime / song.duration;        
        fillBar.style.width = position * 100 +'%';
    });
    

    function next(){        
        currentSong++;
        if(currentSong > 2){
            currentSong = 0;
        }
        playSong();
        $("#play img").attr("src","Play.png");
        $("#image img").attr("src",poster[currentSong]);
        $("#bg img").attr("src",poster[currentSong]);
    }

    function pre(){        
        currentSong--;
        if(currentSong < 0){
            currentSong = 2;
        }
        playSong();
        $("#play img").attr("src","Pause.png");
        $("#image img").attr("src",poster[currentSong]);
        $("#bg img").attr("src",poster[currentSong]);
    }