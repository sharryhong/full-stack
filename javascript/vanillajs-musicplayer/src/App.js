import Component from "./core/Component.js";
import Audio from "./components/Audio.js";

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
    const song = songs[songIndex];

    return `<div class="music-container ${
      isPlaying ? "play" : ""
    }" id="music-container">
      
      <section data-component="audio"></section>
      <div class="img-container">
        <img src="../src/assets/images/${song}.jpeg" alt="music-cover" id="cover" />
      </div>
      <div class="navigation">
        <button id="prev" class="action-btn">
          <i class="fas fa-backward"></i>
        </button>
        <button id="play" class="action-btn action-btn-big">
          ${
            isPlaying
              ? `<i class="fas fa-pause"></i>`
              : `<i class="fas fa-play"></i>`
          }
        </button>
        <button id="next" class="action-btn">
          <i class="fas fa-forward"></i>
        </button>
      </div>
    </div>`;
  }
  mounted() {
    const { songs, songIndex, isPlaying } = this.$state;
    const $audio = this.$target.querySelector('[data-component="audio"]');

    new Audio($audio, {
      songs,
      songIndex,
      isPlaying,
      nextSong: this.nextSong.bind(this),
    });
  }
  nextSong() {
    const { songIndex, songs } = this.$state;
    let newSongindex = songIndex + 1;

    if (newSongindex > songs.length - 1) {
      newSongindex = 0;
    }

    this.setState({ songIndex: newSongindex });
  }
  setEvent() {
    this.addEvent("click", "#play", () => {
      const { isPlaying } = this.$state;
      this.setState({ isPlaying: !isPlaying });
    });

    this.addEvent("click", "#next", () => {
      const { songIndex, songs } = this.$state;
      let newSongindex = songIndex + 1;

      if (newSongindex > songs.length - 1) {
        newSongindex = 0;
      }

      this.setState({ songIndex: newSongindex });
    });

    this.addEvent("click", "#prev", () => {
      const { songIndex, songs } = this.$state;
      let newSongindex = songIndex - 1;

      if (newSongindex < 0) {
        newSongindex = songs.length - 1;
      }

      this.setState({ songIndex: newSongindex });
    });
  }
}

export default App;
