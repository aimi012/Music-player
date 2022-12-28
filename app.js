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

const songList = document.getElementById("songList");
songList.appendChild(createSongLIst());

songList.onclick = function (e) {
  const source = document.getElementById("source");
  source.src = "Music/" + e.target.innerText;

  const player = document.getElementById("player");
  player.load();
  player.play();
};
