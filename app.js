var songs = ["Song1.mp3","Song2.mp3","Song3.mp3"];
    var poster = ["Poster1.jpg","Poster2.jpg","Poster3.jpg"];
    
    var songTitle = document.getElementById("songTitle");
    var fillBar = document.getElementById("fill");
    
    var song = new Audio();
    var currentSong = 0;

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
        var position = song.currentTime / song.duration;        
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