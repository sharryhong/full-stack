import Component from "./core/Component.js";

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
      $playEl: null,
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
  mounted() {}
  playSong() {
    this.$target.querySelector("#audio").play();
  }
  pauseSong() {
    this.$target.querySelector("#audio").pause();
  }
  setEvent() {
    this.addEvent("click", "#play", () => {
      const { isPlaying } = this.$state;
      this.setState({ isPlaying: !isPlaying });
      if (this.$state.isPlaying) {
        this.playSong();
      } else {
        this.pauseSong();
      }
    });

    this.addEvent("click", "#next", () => {
      const { songIndex, songs } = this.$state;
      let newSongindex = songIndex + 1;

      if (newSongindex > songs.length - 1) {
        newSongindex = 0;
      }

      this.setState({ songIndex: newSongindex });
      this.playSong();
    });

    this.addEvent("click", "#prev", () => {
      const { songIndex, songs } = this.$state;
      let newSongindex = songIndex - 1;

      if (newSongindex < 0) {
        newSongindex = songs.length - 1;
      }

      this.setState({ songIndex: newSongindex });
      this.playSong();
    });

    this.addEvent("timeupdate", "#audio", (event) => {
      const { duration, currentTime } = event.srcElement;
      console.log("?");
    });

    this.addEvent("click", "#progress-container", (event) => {
      const width = this.$target.querySelector(
        "#progress-container"
      ).clientWidth;
      const clickX = event.offsetX;
      const duration = this.$target.querySelector("#audio").duration;

      this.$target.querySelector("#audio").currentTime =
        (clickX / width) * duration;
    });
  }
}

export default App;
