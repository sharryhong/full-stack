import Component from "../core/Component.js";

class AudioControls extends Component {
  template() {
    const { isPlaying } = this.$props;

    return `
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
    `;
  }
  setEvent() {
    const { togglePlay, nextSong, prevSong } = this.$props;

    this.addEvent("click", "#play", togglePlay);
    this.addEvent("click", "#next", nextSong);
    this.addEvent("click", "#prev", prevSong);
  }
}

export default AudioControls;
