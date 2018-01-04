var playlist = {
  "Lady Gaga": "joanne"
}

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign(playlist, {artistName: songTitle})
  return playlist;
}