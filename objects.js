var playlist = {
  ladygaga: "joanne"
}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, { [artistName]: songTitle});
}

function removeFromPlaylist(play, artistName){
  ith = delete play.artistName;
  if(ith == true){
      return play;
  }
}