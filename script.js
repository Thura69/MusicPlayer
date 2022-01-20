
let trackAray = [
  {
    trackId: "Music/Ariana Grande - One last time - Myanmar Subtitles.mp3",
    trackTitle: "Ariana Grande - One last time",
  },
  {
    trackId:
      "Music/Bella Thorne - Walk With Me (Charlie's Song) [Lyrics Video] [from -Midnight Sun Soundtrack-].mp3",
    trackTitle: "Bella Thorne - Walk With Me",
  },
  {
    trackId: "Music/BTS (방탄소년단) 'Life Goes On' Official MV.mp3",
    trackTitle: "BTS - Life Goes On",
  },
  {
    trackId: "Music/CAMO_-_생각해봤어_(Horizon)_[Official_Music_Video](1080p).mp3",
    trackTitle: "CAMO - Horizon",
  },
  {
    trackId:
      "Music/DJ Khaled ft. Drake - POPSTAR (Official Audio).mp3",
    trackTitle: "DJ Khaled ft. Drake - POPSTAR",
  },
  {
    trackId:
      "Music/In The Dark - Swae Lee X Jhené Aiko [가사해석_번역].mp3",
    trackTitle: "Swae Lee X Jhené Aiko - In The Dark",
  },
  {
    trackId:
      "Music/Jaden_-_Cabin_Fever(480p).mp3",
    trackTitle: "Jaden - Cabin Fever",
  },
  {
    trackId:
      "Music/JEON_SOMI__전소미__-_‘Anymore’_M_V(720p).mp3",
    trackTitle: "JEON SOMI -Anymore",
  },
  {
    trackId:
      "Music/Joji - YEAH RIGHT_2.mp3",
    trackTitle: "Joji - YEAH RIGHT",
  },
  {
    trackId:
      "Music/Lana_Del_Rey_-_Diet_Mountain_Dew(HD)_Lyrics(360p).mp3",
    trackTitle: "Lana Del Rey - Diet Mountain Dew",
  },
  {
    trackId:
      "Music/The Weeknd - Blinding Lights (Official Audio).mp3",
    trackTitle: "The Weeknd - Blinding Lights",
  },
  {
    trackId:
      "Music/The_Weeknd_-_Save_Your_Tears_(Official_Music_Video)(480p).mp3",
    trackTitle: "The Weeknd - Save Your Tears_",
  }
];
let listTitle = document.getElementsByClassName("listTitle")[0];
let audio = document.getElementsByClassName("audio")[0];
let currentTitle = document.getElementsByClassName("showCurrent")[0];

for (let i = 0; i < trackAray.length; i++) {
  const titleItem = document.createElement("div");
  titleItem.classList.add("titleItem");
  titleItem.addEventListener("click", () => {
    const id = trackAray[i].trackId;
    console.log(id);
    audio.src = id;
    audio.play();
    playCheck = true;
    playAndPause();
    counter = i;
    currentTitle.textContent = trackAray[i].trackTitle;
  });
  titleItem.textContent = (i + 1).toString() + ". " + trackAray[i].trackTitle;
  listTitle.append(titleItem);
}
let totalTime;
let durationSecond;
audio.addEventListener("loadeddata", () => {
  durationSecond = Math.floor(audio.duration);
  totalTime = minuteAndSecond(durationSecond);
});

let current;
let currentTime;
audio.addEventListener("timeupdate", () => {
  currentTime = Math.floor(audio.currentTime);
  current = minuteAndSecond(currentTime);
  document.getElementsByClassName("currentAndTotleTime")[0].textContent =
    current + " / " + totalTime;

  progressBarAj(durationSecond, currentTime);
});

const minuteAndSecond = (totaSeconds) => {
  const Minute = Math.floor(totaSeconds / 60);
  const Second = totaSeconds % 60;
  const minuteText = Minute < 10 ? "0" + Minute.toString() : Minute;
  const secondText = Second < 10 ? "0" + Second.toString() : Second;
  return minuteText + ":" + secondText;
};

let progressBarAj = (durationSecond, currentTime) => {
  if (window.screen.width <= 500) {
    let onesecond = Math.floor((300 / durationSecond) * currentTime);
    document.getElementById("currentProgress").style.width = onesecond + "px";
    console.log("This is work");
  } else if (window.screen.width <= 290) {
    let onesecond = Math.floor((200 / durationSecond) * currentTime);
    document.getElementById("currentProgress").style.width = onesecond + "px";
    console.log("This is work");
  } else {
    let onesecond = Math.floor((390 / durationSecond) * currentTime);
    document.getElementById("currentProgress").style.width = onesecond + "px";
  }
};
console.log(screen.width);

let playBtn = document.getElementsByClassName("playBtn")[0];
let pauseBtn = document.getElementsByClassName("pauseBtn")[0];
let previousBtn = document.getElementsByClassName("previousBtn")[0];
let nextBtn = document.getElementsByClassName("nextBtn")[0];


let playCheck = false;
playBtn.addEventListener("click", () => {
  let isPlaying = Math.floor(audio.currentTime);
  let playTitle = trackAray[counter].trackTitle;
  currentTitle.textContent = playTitle;
  playCheck = true;
  if (isPlaying === 0) {
    let playFirst = trackAray[counter].trackId;
    audio.src = playFirst;
    audio.play();
    playAndPause();
  } else {
    audio.play();
    playAndPause();
  }
});
pauseBtn.addEventListener("click", () => {
  audio.pause();
  playCheck = false;
  playAndPause();
});

let playAndPause = () => {
  if (playCheck) {
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";
  } else {
    playBtn.style.display = "inline";
    pauseBtn.style.display = "none";
  }
};
let counter = 0;
let nextFunction=()=>{
  if(counter === trackAray.length-1){
    return;
}
    playCheck = true;
    playAndPause();
    counter += 1;
    let nextTitle = trackAray[counter].trackTitle;
    currentTitle.textContent = nextTitle;
    console.log(counter)
    playAudio(counter);
}
let preFunction = ()=>{
    if(counter === 0){
        return;
    }
    playCheck = true;
    playAndPause();
    counter -= 1;
    let preTitle = trackAray[counter].trackTitle;
    currentTitle.textContent = preTitle;
    playAudio(counter);
    
   }

nextBtn.addEventListener("click",nextFunction)
previousBtn.addEventListener("click",preFunction)

let playAudio =(counter)=>{
    let playFirst = trackAray[counter].trackId;
    audio.src = playFirst;
    audio.play();
}