import Component from "./core/Component.js";
import Audio from "./components/Audio.js";
import AudioControls from "./components/AudioControls.js";

class App extends Component {
  setup() {
    this.$state = this.$props.presenter.$state;
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
    const { presenter } = this.$props;
    const { songs, songIndex, isPlaying } = this.$state;
    const $audio = this.$target.querySelector('[data-component="audio"]');
    const $audioControls = this.$target.querySelector(
      '[data-component="audio-controls"]'
    );

    new Audio($audio, {
      songs,
      songIndex,
      isPlaying,
      nextSong: presenter.nextSong.bind(this),
    });
    new AudioControls($audioControls, {
      isPlaying,
      togglePlay: presenter.togglePlay.bind(this),
      nextSong: presenter.nextSong.bind(this),
      prevSong: presenter.prevSong.bind(this),
    });
  }
}

export default App;
