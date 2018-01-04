var playlist = {
  "Lady Gaga": "joanne"
}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, { [artistName]: songTitle});
}

function removeFromPlaylist(play, artistName){
  return delete play.artistName;
}