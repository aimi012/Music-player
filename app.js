const songs = [
  "allthat.mp3",
  "creativeminds.mp3",
  "dreams.mp3",
  "evolution.mp3",
  "hey.mp3",
];

function createSongLIst() {
  const list = document.createElement("ol");
  for (let i = 0; i < songs.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(songs[i]));
    list.appendChild(item);
  }
  return list;
}

const player = document.getElementById("player");

const songList = document.getElementById("songList");
songList.appendChild(createSongLIst());

const links = document.querySelectorAll('li');
for (const link of links) {
    link.addEventListener('click', setSong)
}

function setSong (e) {
  const hp = document.querySelector("#headphone");
  hp.classList.remove('pulse')

  const source = document.getElementById("source");
  source.src = "Music/" + e.target.innerText;

  document.querySelector(
    "#currentSong"
  ).innerHTML = `Now Playing + ${e.target.innerText}`;

  player.load();
  player.play();
  hp.classList.add("pulse");
};

function playAudio() {
  if (player.readyState) {
    player.play();
  }
}

function pauseAudio() {
  player.pause();
}

const slider = document.getElementById("volumeSlider");
slider.oninput = function (e) {
  const volume = e.target.value;
  player.volume = volume;
};

function updateProgress() {
  if (player.currentTime > 0) {
    const progressBar = document.getElementById("progress");
    progressBar.value = (player.currentTime / player.duration) * 100;
  }

  console.log(player.currentTime);
  console.log(player.duration);
}
