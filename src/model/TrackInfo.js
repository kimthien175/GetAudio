export default class TrackInfo {
  id: Number;
  artist: String;
  duration: Number;
  genre: String;
  title: String;
  minimumSongDuration: Number;
  path: String;
  fileName:String;

  constructor(trackInfo: any) {
    if (trackInfo) {
      if (trackInfo['id']) this.id = trackInfo['id'];
      if (trackInfo['artist']) this.artist = trackInfo['artist'];
      if (trackInfo['duration']) this.duration = Number(trackInfo['duration']);
      if (trackInfo['genre']) this.genre = trackInfo['genre'];
      if (trackInfo['title']) this.title = trackInfo['title'];
      if (trackInfo['minimumSongDuration'])
        this.minimumSongDuration = trackInfo['minimumSongDuration'];
      if (trackInfo['path']) this.path = trackInfo['path'];
      if (trackInfo['fileName']) this.fileName = trackInfo['fileName'];
    }
  }
}
