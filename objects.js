var playlist = {
  ladygaga: "joanne"
}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, { [artistName]: songTitle});
}

function removeFromPlaylist(play, artistName){
  var name = artistName
  delete play.name;
  return play;
}