class AudioPresenter {
  constructor(state) {
    this.$state = state;
  }
  togglePlay() {
    const { isPlaying } = this.$state;
    this.setState({ isPlaying: !isPlaying });
  }
  nextSong() {
    const { songIndex, songs } = this.$state;
    let newSongindex = songIndex + 1;

    if (newSongindex > songs.length - 1) {
      newSongindex = 0;
    }

    this.setState({ songIndex: newSongindex });
  }
  prevSong() {
    const { songIndex, songs } = this.$state;
    let newSongindex = songIndex - 1;

    if (newSongindex < 0) {
      newSongindex = songs.length - 1;
    }

    this.setState({ songIndex: newSongindex });
  }
}

export default AudioPresenter;
