import Component from "./core/Component.js";

class App extends Component {
  setup() {
    this.$state = {
      songs: [
        "Juice WRLD Ft Benny Blanco - Real Shit",
        "Lil Baby, Lil Durk ft Rodwave - Rich Off Pain",
        "Polo G – I Know",
      ],
      songIndex: 2,
      isPlaying: false,
    };
  }
  template() {
    const { songs, songIndex, isPlaying } = this.$state;

    return `<div class="music-container ${
      isPlaying ? "play" : ""
    }" id="music-container">
      <div class="music-info">
        <h4 id="title"></h4>
        <div class="progress-container" id="progress-container">
          <div class="progress" id="progress"></div>
        </div>
      </div>
      <audio src="../src/assets/music/${
        songs[songIndex]
      }.mp3" id="audio"></audio>
      <div class="img-container">
        <img src="../src/assets/images/${
          songs[songIndex]
        }.jpeg" alt="music-cover" id="cover" />
      </div>
      <div class="navigation">
        <button id="prev" class="action-btn">
          <i class="fas fa-backward"></i>
        </button>
        <button id="play" class="action-btn action-btn-big">
          <i class="fas fa-play"></i>
        </button>
        <button id="next" class="action-btn">
          <i class="fas fa-forward"></i>
        </button>
      </div>
    </div>`;
  }
  mounted() {}
  setEvent() {
    this.addEvent("click", "#play", () => {
      const { isPlaying } = this.$state;
      this.setState({ isPlaying: !isPlaying });
      console.log(this.$state);
    });
  }
}

export default App;
