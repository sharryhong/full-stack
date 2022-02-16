import Component from "./core/Component.js";
import Audio from "./components/Audio.js";
import AudioControls from "./components/AudioControls.js";

class App extends Component {
  setup() {
    this.$state = {
      songs: [
        "Falling Slowly",
        "Juice WRLD Ft Benny Blanco - Real Shit",
        "Lil Baby, Lil Durk ft Rodwave - Rich Off Pain",
      ],
      songIndex: 0,
      isPlaying: false,
    };
  }
  template() {
    const { songs, songIndex, isPlaying } = this.$state;

    return `<div class="music-container ${
      isPlaying ? "play" : ""
    }" id="music-container">
      <section data-component="audio" class="music-info"></section>
      <div class="img-container">
        <img src="../src/assets/images/${
          songs[songIndex]
        }.jpeg" alt="music-cover" id="cover" />
      </div>
      <section data-component="audio-controls" class="navigation"></section>
    </div>`;
  }
  mounted() {
    const { songs, songIndex, isPlaying } = this.$state;
    const $audio = this.$target.querySelector('[data-component="audio"]');
    const $audioControls = this.$target.querySelector(
      '[data-component="audio-controls"]'
    );

    new Audio($audio, {
      songs,
      songIndex,
      isPlaying,
      nextSong: this.nextSong.bind(this),
    });
    new AudioControls($audioControls, {
      isPlaying,
      togglePlay: this.togglePlay.bind(this),
      nextSong: this.nextSong.bind(this),
      prevSong: this.prevSong.bind(this),
    });
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

export default App;
