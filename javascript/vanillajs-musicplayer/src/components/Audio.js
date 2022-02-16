import Component from "../core/Component.js";

class Audio extends Component {
  $audio;

  template() {
    const { songs, songIndex } = this.$props;

    return `
        <h4 id="title">${songs[songIndex]}</h4>
        <div class="progress-container" id="progress-container">
          <div class="progress" id="progress"></div>
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
    const { nextSong } = this.$props;
    const $audio = this.$target.querySelector("#audio");
    const $progress = this.$target.querySelector("#progress");
    const $progressContainer = this.$target.querySelector(
      "#progress-container"
    );

    $audio.addEventListener("timeupdate", (event) => {
      const { duration, currentTime } = event.srcElement;
      const progressPercent = (currentTime / duration) * 100;
      $progress.style.width = `${progressPercent}%`;
    });

    $audio.addEventListener("ended", nextSong);

    $progressContainer.addEventListener("click", (event) => {
      const width = $progressContainer.clientWidth;
      const clickX = event.offsetX;
      const duration = $audio.duration;

      $audio.currentTime = (clickX / width) * duration;
    });
  }
}

export default Audio;
