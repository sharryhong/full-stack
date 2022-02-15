import Component from "../core/Component.js";

class Audio extends Component {
  $audio;

  template() {
    const { songs, songIndex } = this.$props;
    return `
      <div class="music-info">
        <h4 id="title">${songs[songIndex]}</h4>
        <div class="progress-container" id="progress-container">
          <div class="progress" id="progress"></div>
        </div>
      </div>
      <audio src="../src/assets/music/${songs[songIndex]}.mp3" id="audio"></audio>
    `;
  }
  mounted() {
    this.$audio = this.$target.querySelector("#audio");

    const { isPlaying } = this.$props;

    if (isPlaying) {
      this.playSong();
    }
  }
  playSong() {
    this.$audio.play();
  }
  setEvent() {
    const $progress = this.$target.querySelector("#progress");

    this.$audio.addEventListener("timeupdate", (event) => {
      const { duration, currentTime } = event.srcElement;
      const progressPercent = (currentTime / duration) * 100;
      $progress.style.width = `${progressPercent}%`;
    });
  }
}

export default Audio;
