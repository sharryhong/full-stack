import Component from "./core/Component.js";

class App extends Component {
  setup() {
    this.$state = {
      songs: [
        "Juice WRLD Ft Benny Blanco - Real Shit.jpeg",
        "Lil Baby, Lil Durk ft Rodwave - Rich Off Pain.jpeg",
        "Polo G – I Know.jpeg",
      ],
      songIndex: 2,
    };
  }
  template() {
    return `<div class="music-container" id="music-container">
      <div class="music-info">
        <h4 id="title"></h4>
        <div class="progress-container" id="progress-container">
          <div class="progress" id="progress"></div>
        </div>
      </div>
      <audio src="../src/assets/music/Polo G – I Know.mp3" id="audio"></audio>
      <div class="img-container">
        <img src="../src/assets/images/Polo G – I Know.jpeg" alt="music-cover" id="cover" />
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
  mounted() {
    const $musicContainer = document.getElementById("music-container");
    const $playBtn = document.getElementById("play");
    const $prevBtn = document.getElementById("prev");
    const $nextBtn = document.getElementById("next");

    const $audio = document.getElementById("audio");
    const $progress = document.getElementById("progress");
    const $progressContainer = document.getElementById("progress-container");
    const $title = document.getElementById("title");
    const $cover = document.getElementById("cover");
  }
}

export default App;
