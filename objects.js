var playlist = {
  "Lady Gaga": "joanne"
}

function updatePlaylist(playlist, artistName, songTitle){
  const result = Object.assign({}, playlist, { artistName: songTitle});
  return result;
}