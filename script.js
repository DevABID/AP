console.log('Sportify');

let songIndex = 0;
let audioElement = new Audio('../songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let myProgressBar = document.getElementById('myprogressBar');
let songs = [
    {songName: 'Warriyo - Mortals', filePath: 'songs/1.mp3', coverPath: 'covers/1.jpg'},
    
    // 2
    {songName: 'On & On', filePath: 'songs/2.mp3', coverPath: 'covers/2.jpg'},
   
    // 3
    {songName: 'Powlay', filePath: 'songs/2.mp3', coverPath: 'covers/2.jpg'},

    //  4
    {songName: 'Cielo ', filePath: 'songs/3.mp3', coverPath: 'covers/3.jpg'},

    // 5
    {songName: 'Different Heaven & EH!DE', filePath: 'songs/4.mp3', coverPath: 'covers/4.jpg'},

    // 6
    {songName: 'Janji-Heroes', filePath: 'songs/5.mp3', coverPath: 'covers/5.jpg'},

    // 7
    {songName: 'Tonight-feat-Johnning', filePath: 'songs/6.mp3', coverPath: 'covers/6.jpg'},

    
    // 8
    {songName: 'Johnning', filePath: 'songs/7.mp3', coverPath: 'covers/7.jpg'},

    // 9
    {songName: 'Otilia', filePath: 'songs/8.mp3', coverPath: 'covers/8.jpg'},

 

]

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

songItem.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;

    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});


// Listen to Events
audioElement.addEventListener('timeupdate',()=>
{
  Progres = parseInt((audioElement.currentTime/audioElement.duration)*100);
   myProgressBar.value = Progres;
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})






const makeAllPlay = ()=> {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');

        audioElement.src = 'songs/${songIndex+1}.mp3';
        audioElement.currentTime = 0;
        audioElement.play();

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=8){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})


document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})